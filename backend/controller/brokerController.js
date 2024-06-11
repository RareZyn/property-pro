const asyncHandler = require("express-async-handler");
const { prisma } = require("../config/prismaConfig.js");
const { toast } = require("react-toastify");

const addBroker = asyncHandler(async (req, res) => {
  const {
    fullName,
    brokerLicense,
    brokerIC,
    fileIC,
    fileBrokerLicense,
    userID,
  } = req.body;

  try {
    // Check if the broker already exists
    const existingBroker = await prisma.broker.findUnique({
      where: { userID },
    });

    if (existingBroker) {
      return res
        .status(400)
        .json({ message: "Broker with this user ID already exists" });
    }

    // Create the broker
    const newBroker = await prisma.broker.create({
      data: {
        fullName,
        brokerLicense,
        brokerIC,
        fileIC,
        fileBrokerLicense,
        userID,
      },
    });

    // Update the user's brokerID field
    await prisma.users.update({
      where: { id: userID },
      data: { brokerID: newBroker.broker_id },
    });

    // Fetch the associated user details after creating the broker
    const user = await prisma.users.findUnique({
      where: { id: userID },
      include: {
        properties_owned: true,
        properties_sell: true,
        broker: true,
      },
    });

    res.status(201).send({
      message: "Broker registered successfully",
      user: { ...newBroker, user }, // Combine broker and user data
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error.message);
  }
});

const verifyProperty = asyncHandler(async (req, res) => {
  const { propertyID, verificationResults, brokerID } = req.body; // Added brokerID

  try {
    // Fetch the property
    const property = await prisma.property.findUnique({
      where: { property_id: propertyID },
    });

    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    // Ensure verificationResults has the correct structure
    if (
      !Array.isArray(verificationResults) ||
      verificationResults.length !== 3 ||
      !verificationResults.every(
        (result) =>
          typeof result.message === "string" &&
          typeof result.status === "boolean"
      )
    ) {
      return res
        .status(400)
        .json({ message: "Invalid verification results format" });
    }

    // Check verification results
    let isVerified = true;
    const verificationStatus = {};

    for (let i = 0; i < 3; i++) {
      verificationStatus[`file[${i}]`] = verificationResults[i];
      if (!verificationResults[i].status) {
        isVerified = false;
      }
    }

    // Update the property with the verification status, isVerified flag, and brokerID
    await prisma.property.update({
      where: { property_id: propertyID },
      data: {
        verificationStatus,
        isVerified,
        brokerID, // Added brokerID
      },
    });

    res.status(200).json({
      message: isVerified
        ? toast.success(
            "Property status updated: Property verified successfully "
          ) && "Property verified successfully"
        : toast.success(
            "Property status updated: Property verification failed "
          ) && "Property verification failed",
      verificationStatus,
      isVerified,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error.message);
  }
});

const unverifiedProperty = asyncHandler(async (req, res) => {
  try {
    const properties = await prisma.property.findMany({
      where: {
        buyer: null,
        isVerified: false,
      },
      include: {
        vehicle: true,
        land: true,
        house: true,
      },
    });

    console.log("Properties:", properties); // Log properties fetched by Prisma

    res.status(200).json(properties);
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ message: "Failed to retrieve available properties" });
  }
});

const verifiedProperty = asyncHandler(async (req, res) => {
  try {
    const properties = await prisma.property.findMany({
      where: {
        isVerified:true,
        buyer:null,
      },
      include: {
        vehicle: true,
        land: true,
        house: true,
      },
    });

    console.log("Properties:", properties); // Log properties fetched by Prisma

    res.status(200).json(properties);
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ message: "Failed to retrieve available properties" });
  }
});

module.exports = {
  addBroker,
  verifyProperty,
  unverifiedProperty,
  verifiedProperty,
};
