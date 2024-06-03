const router = require("express").Router();
const { addLand, addVehicle, addHouse, getAllProperties} = require("../controller/propertyController");
router.post("/addLand", addLand);
router.post("/addVehicle", addVehicle);
router.post("/addHouse", addHouse);
router.get("/getAllProperties", getAllProperties);

module.exports = router;
