const asyncHandler = require("express-async-handler");
const { prisma } = require("../config/prismaConfig.js");

const findUser = asyncHandler(async (req, res) => {
  try {
    const users = await prisma.users.findMany({
      where: {},
    });
    console.log("Senarai User:", users); 
    res.status(200).json(users); 
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: err.message }); 
  }
});

module.exports = { findUser };
