const asyncHandler = require("express-async-handler");
const { prisma } = require("../config/prismaConfig.js");

// Function to add a property and then add it as a Land
const addLand = asyncHandler(async (req, res) => {
  const {
    title,
    sellerID,
    description,
    propertyType,
    price,
    image,
    area,
    location,
    land_type,
    ownership_type
  } = req.body;

  // Validate propertyType
  if (propertyType !== "Land") {
    return res.status(400).json({ message: "Invalid property type for Land" });
  }

  const propertyData = {
    title,
    description,
    propertyType,
    price,
    image,
    seller: {
      connect: { id: sellerID },
    },
  };

  const property = await prisma.property.create({
    data: propertyData,
  });

  const land = await prisma.land.create({
    data: {
      propertyID: property.property_id,
      area,
      location,
      land_type,
      ownership_type,
    },
  });

  res.status(201).json({ property, land });
});

// Function to add a property and then add it as a Vehicle
const addVehicle = asyncHandler(async (req, res) => {
  const {
    title,
    sellerID,
    description,
    propertyType,
    price,
    image,
    vehicleType,
    brand,
    model,
    seats,
    mileage,
    ManufacturedYear,
    cc,
    condition,
  } = req.body;

  const propertyData = {
    title,
    description,
    propertyType,
    price,
    image,
    seller: {
      connect: { id: sellerID },
    }
  };

  const property = await prisma.property.create({
    data: propertyData,
  });

  const vehicle = await prisma.vehicle.create({
    data: {
      propertyID: property.property_id,
      vehicleType,
      brand,
      model,
      seats,
      mileage,
      ManufacturedYear,
      cc,
      condition,
    }
  });

  res.status(201).json({ property, vehicle });
});

// Function to add a property and then add it as a House
const addHouse = asyncHandler(async (req, res) => {
  const {
    title,
    sellerID,
    description,
    propertyType,
    price,
    image,
    size,
    location,
    rooms,
    bathrooms,
  } = req.body;

  try {
    // Validate propertyType
    if (propertyType !== "House") {
      return res
        .status(400)
        .json({ message: "Invalid property type for House" });
    }

    const propertyData = {
      title,
      description,
      propertyType,
      price,
      image,
      seller: {
        connect: { id: sellerID },
      },
    };

    const property = await prisma.property.create({
      data: propertyData,
    });

    const house = await prisma.house.create({
      data: {
        propertyID: property.property_id,
        size,
        location,
        rooms,
        bathrooms,
      },
    });

    res.status(201).json({ property, house });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ message: error.message });
  }
});

module.exports = {
  addLand,
  addVehicle,
  addHouse,
};