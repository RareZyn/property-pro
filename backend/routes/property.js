const router = require("express").Router();
const { addLand, addVehicle, addHouse, getAllProperties, getProperty, buyProperty, availableProperties} = require("../controller/propertyController");
router.post("/addLand", addLand);
router.post("/addVehicle", addVehicle);
router.post("/addHouse", addHouse);
router.get("/getAllProperties", getAllProperties);
router.get("/availableProperties",availableProperties);
router.get("/getProperty/:id",getProperty);
router.post("/buyProperty/:propertyID", buyProperty);

module.exports = router;
