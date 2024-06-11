const router = require("express").Router();
const {addBroker, verifyProperty, getAllBroker} = require("../controller/brokerController");

router.post("/addBroker",addBroker);
router.post("/verifyProperty",verifyProperty);
router.get('/getAllBroker', getAllBroker);

module.exports = router;