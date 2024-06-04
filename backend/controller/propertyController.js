const asyncHandler = require("express-async-handler");
const { prisma } = require("../config/prismaConfig.js");

const getProperty = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const property = await prisma.property.findUnique({
      where: { property_id: id }, // Use id directly without parsing to Int
      include: {
        vehicle: true,
        land: true,
        house: true,
        seller: true,
        broker: true,
        buyer: true,
      },
    });

    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    res.status(200).json(property);
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ message: "Failed to retrieve property: " + error.message });
  }
});

const getAllProperties = asyncHandler(async (req, res) => {
  try {
    const properties = await prisma.property.findMany({
      include: {
        vehicle: true,
        land: true,
        house: true,
        seller: true, // Include seller details if necessary
        broker: true, // Include broker details if necessary
        buyer: true, // Include buyer details if necessary
      },
    });
    res.status(200).json(properties);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Failed to retrieve properties" });
  }
});

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
  getAllProperties,
  getProperty
};
