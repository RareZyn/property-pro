const asyncHandler = require("express-async-handler");
const { prisma } = require("../config/prismaConfig.js");



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
    images,
    area,
    location,
    land_type,
    ownership_type,
    file
  } = req.body;

  // Validate propertyType
  if (propertyType !== "Land") {
    return res.status(400).json({ message: "Invalid property type for Land" });
  }

  // Check if sellerID is provided
  if (!sellerID) {
    return res.status(400).json({ message: "Seller ID is required" });
  }

  const propertyData = {
    title,
    description,
    propertyType,
    price,
    images,
    seller: {
      connect: { id: sellerID },
    },
    file
  };

  try {
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
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Function to add a property and then add it as a Vehicle
const addVehicle = asyncHandler(async (req, res) => {
  const {
    title,
    sellerID,
    description,
    propertyType,
    price,
    images,
    vehicleType,
    brand,
    model,
    seats,
    mileage,
    ManufacturedYear,
    cc,
    condition,
    file
  } = req.body;

  const propertyData = {
    title,
    description,
    propertyType,
    price,
    images,
    file,
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
    images,
    size,
    location,
    rooms,
    bathrooms,
    file
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
      images,
      file,
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


// Function to handle property purchase
const buyProperty = asyncHandler(async (req, res) => {
  const { id } = req.body; // Correct field name
  const { propertyID } = req.params;

  console.log(`Property ID: ${propertyID}, User ID: ${id}`); // Debugging log

  try {
    const property = await prisma.property.findUnique({
      where: { property_id: propertyID },
    });

    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    if (property.buyerID) {
      return res.status(400).json({ message: "Property is already sold" });
    }

    const updatedProperty = await prisma.property.update({
      where: { property_id: propertyID },
      data: {
        buyerID: id,
      },
    });

    await prisma.users.update({
      where: { id: id },
      data: {
        properties_owned: {
          connect: { property_id: propertyID },
        },
      },
    });

    res.status(200).json({
      message: "Property purchased successfully",
      property: updatedProperty,
    });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ message: "Failed to purchase property: " + error.message });
  }
});
const availableProperties = asyncHandler(async (req, res) => {
  try {
    const properties = await prisma.property.findMany({
      where: {
        buyer: null, // Filter properties where buyerID is null or undefined
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

 const toFav = asyncHandler(async (req, res) => {
   const { id } = req.body;
   const { propertyID } = req.params;

   try {
     const user = await prisma.users.findUnique({
       where: { id },
     });

     if (!user) {
       return res.status(404).send({ message: "User not found" });
     }

     let updateUser;

     if (user.favResidencieID.includes(propertyID)) {
       updateUser = await prisma.users.update({
         where: { id },
         data: {
           favResidencieID: {
             set: user.favResidencieID.filter((id) => id !== propertyID),
           },
         },
       });

       res.send({ message: "Removed from favorites", user: updateUser });
     } else {
       updateUser = await prisma.users.update({
         where: { id },
         data: {
           favResidencieID: {
             push: propertyID,
           },
         },
       });

       res.send({ message: "Updated favorites", user: updateUser });
     }
   } catch (err) {
     res.status(500).send({ message: err.message });
   }
 });

 const getAllFavorites = asyncHandler(async (req, res) => {
   const { id } = req.query;
   try {
     const user = await prisma.users.findUnique({
       where: { id },
       select: { favResidencieID: true },
     });
     res.status(200).send(user.favResidencieID);
   } catch (err) {
     res.status(500).send({ message: err.message });
   }
 });
const getPropertySeller = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const properties = await prisma.property.findMany({
      where: { sellerID: id },
      include: {
        vehicle: true,
        land: true,
        house: true,
      },
    });
    res.status(200).json(properties);
  } catch (error) {
    console.log("Error retrieving properties:", error.message);
    res
      .status(500)
      .json({ message: "Failed to retrieve properties: " + error.message });
  }
});

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




module.exports = {
  addLand,
  addVehicle,
  addHouse,
  getAllProperties,
  getProperty,
  buyProperty,
  availableProperties,
  toFav,
  getAllFavorites,
  getPropertySeller
};
