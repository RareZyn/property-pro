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

  if (!id) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {
    const user = await prisma.users.findUnique({
      where: { id }, // Use the id directly
      select: { favResidencieID: true },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const favoriteProperties = await prisma.property.findMany({
      where: {
        property_id: {
          in: user.favResidencieID,
        },
      },
      include: {
        vehicle: true,
        land: true,
        house: true,
        seller: true,
        broker: true,
        buyer: true,
      },
    });

    res.status(200).json(favoriteProperties);
  } catch (err) {
    console.log(err.message);
    res
      .status(500)
      .json({
        message: "Failed to retrieve favorite properties: " + err.message,
      });
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

const updateLand = asyncHandler(async (req, res) => {
  const {
    property_id, // The property ID
    title,
    description,
    price,
    area,
    location,
    land_type,
    ownership_type,
  } = req.body;

  // Validate required fields
  if (!property_id) {
    return res.status(400).json({ message: "Property ID is required" });
  }

  // Build property update data
  const propertyData = {
    title,
    description,
    price,
  };

  // Remove undefined values from propertyData
  Object.keys(propertyData).forEach((key) => {
    if (propertyData[key] === undefined) {
      delete propertyData[key];
    }
  });

  try {
    // Update property
    const property = await prisma.property.update({
      where: { property_id },
      data: propertyData,
    });

    // Check if land details exist and need to be updated
    const landData = {
      area,
      location,
      land_type,
      ownership_type,
    };

    // Remove undefined values from landData
    Object.keys(landData).forEach((key) => {
      if (landData[key] === undefined) {
        delete landData[key];
      }
    });

    const land = await prisma.land.update({
      where: { propertyID: property_id },
      data: landData,
    });

    res.status(200).json({ property, land });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const updateVehicle = asyncHandler(async (req, res) => {
  const {
    property_id, // Align with client-side naming
    title,
    description,
    price,
    vehicleType,
    brand,
    model,
    seats,
    mileage,
    ManufacturedYear,
    cc,
    condition,
  } = req.body;

  // Validate required fields
  if (!property_id) {
    return res.status(400).json({ message: "Property ID is required" });
  }

  // Build property update data
  const propertyData = {
    title,
    description,
    price,
  };

  // Remove undefined values from propertyData
  Object.keys(propertyData).forEach((key) => {
    if (propertyData[key] === undefined) {
      delete propertyData[key];
    }
  });

  // Build vehicle update data
  const vehicleData = {
    vehicleType,
    brand,
    model,
    seats,
    mileage,
    ManufacturedYear,
    cc,
    condition,
  };

  // Remove undefined values from vehicleData
  Object.keys(vehicleData).forEach((key) => {
    if (vehicleData[key] === undefined) {
      delete vehicleData[key];
    }
  });

  try {
    // Update property using `property_id`
    const property = await prisma.property.update({
      where: { property_id }, // Use `property_id` here
      data: propertyData,
    });

    // Check if there are vehicle details to update
    if (Object.keys(vehicleData).length > 0) {
      // Update vehicle using the relationship with property
      const vehicle = await prisma.vehicle.update({
        where: { propertyID: property_id }, // Use `propertyID` here
        data: vehicleData,
      });
      res.status(200).json({ property, vehicle });
    } else {
      res.status(200).json({ property });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


const updateHouse = asyncHandler(async (req, res) => {
  const {
    property_id,
    title,
    description,
    propertyType,
    price,
    size,
    location,
    rooms,
    bathrooms,
  } = req.body;

  // Validate required fields
  if (!property_id) {
    return res.status(400).json({ message: "Property ID is required" });
  }

  // Validate propertyType
  if (propertyType && propertyType !== "House") {
    return res.status(400).json({ message: "Invalid property type for House" });
  }

  // Build property update data
  const propertyData = {
    title,
    description,
    price,
  };

  // Remove undefined values from propertyData
  Object.keys(propertyData).forEach((key) => {
    if (propertyData[key] === undefined) {
      delete propertyData[key];
    }
  });

  try {
    // Update property
    const property = await prisma.property.update({
      where: { property_id },
      data: propertyData,
    });

    // Check if house details exist and need to be updated
    const houseData = {
      size,
      location,
      rooms,
      bathrooms,
    };

    // Remove undefined values from houseData
    Object.keys(houseData).forEach((key) => {
      if (houseData[key] === undefined) {
        delete houseData[key];
      }
    });

    const house = await prisma.house.update({
      where: { propertyID: property_id },
      data: houseData,
    });

    res.status(200).json({ property, house });
  } catch (error) {
    res.status(500).json({ message: error.message });
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
  getPropertySeller,
  updateLand,
  updateVehicle,
  updateHouse

  
};
