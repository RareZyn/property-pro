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
  const { propertyID, verificationResults } = req.body;

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

    // Update the property with the verification status and isVerified flag
    await prisma.property.update({
      where: { property_id: propertyID },
      data: {
        verificationStatus,
        isVerified,
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




module.exports = { addBroker,verifyProperty };
