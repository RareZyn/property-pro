const asyncHandler = require("express-async-handler");
const { prisma } = require("../config/prismaConfig.js");
const bcrypt = require("bcrypt");

const addBroker = asyncHandler(async (req, res) => {
  const {
    fullName,
    brokerLicense,
    password,
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

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the broker
    const newBroker = await prisma.broker.create({
      data: {
        fullName,
        brokerLicense,
        password: hashedPassword,
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

module.exports = { addBroker };
