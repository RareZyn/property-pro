const router = require("express").Router();
const { addLand, addVehicle, addHouse, getAllProperties, getProperty, buyProperty, availableProperties, toFav, getAllFavorites, getPropertySeller, updateVehicle, updateLand, updateHouse, getPropertyBought, getHotItemsProperty} = require("../controller/propertyController");
router.post("/addLand", addLand);
router.post("/addVehicle", addVehicle);
router.post("/addHouse", addHouse);
router.get("/getAllProperties", getAllProperties);
router.get("/availableProperties",availableProperties);
router.get("/getProperty/:id",getProperty);
router.post("/buyProperty/:propertyID", buyProperty);
router.post("/toFav/:propertyID", toFav);
router.get("/getAllFavorites", getAllFavorites);
router.get("/getPropertySeller/:id", getPropertySeller);
router.put("/updateVehicle",updateVehicle);
router.put("/updateLand", updateLand);
router.put("/updateHouse",updateHouse);
router.get("/getPropertyBought", getPropertyBought);
router.get("/getHotItemsProperty",getHotItemsProperty);

module.exports = router;
