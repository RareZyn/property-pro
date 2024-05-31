const router = require("express").Router();
const { addLand, addVehicle, addHouse} = require("../controller/propertyController");
router.post("/addLand", addLand);
router.post("/addVehicle", addVehicle);
router.post("/addHouse", addHouse);

module.exports = router;
