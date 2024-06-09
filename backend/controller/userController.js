const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const { prisma } = require("../config/prismaConfig.js");

const addUser = asyncHandler(async (req, res) => {
  const {
    username,
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    location,
    description,
  } = req.body;

  try {
    // Check if user already exists
    const userExist = await prisma.users.findUnique({
      where: { username: username },
    });
    if (userExist) {
      return res.status(409).send({ message: "User already registered" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const newUser = await prisma.users.create({
      data: {
        username,
        firstName,
        lastName,
        email,
        password: hashedPassword,
        phoneNumber,
        location,
        description,
      },
    });

    res.status(201).send({
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const countSellProperty = asyncHandler(async (req, res) => {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {
    const count = await prisma.property.count({
      where: {
        sellerID: userId,
      },
    });

    res.status(200).json({ count });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ message: "Failed to count properties: " + error.message });
  }
});

const countPurchaseProperty = asyncHandler(async (req, res) => {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {
    const count = await prisma.property.count({
      where: {
        buyerID: userId,
      },
    });

    res.status(200).json({ count });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ message: "Failed to count properties: " + error.message });
  }
});

const countOtherUserPurchase = asyncHandler(async (req, res) => {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {
    const count = await prisma.property.count({
      where: {
        sellerID: userId,
        buyerID: {
          not: userId,

        },
      },
    });

    res.status(200).json({ count });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ message: "Failed to count properties: " + error.message });
  }
});



module.exports = {
  addUser,
  countSellProperty,
  countPurchaseProperty,
  countOtherUserPurchase,
};