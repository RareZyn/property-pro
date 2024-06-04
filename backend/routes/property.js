const router = require("express").Router();
const { addLand, addVehicle, addHouse, getAllProperties, getProperty} = require("../controller/propertyController");
router.post("/addLand", addLand);
router.post("/addVehicle", addVehicle);
router.post("/addHouse", addHouse);
router.get("/getAllProperties", getAllProperties);
router.get("/getProperty/:id",getProperty);

module.exports = router;
