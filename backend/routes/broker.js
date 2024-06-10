const router = require("express").Router();
const {addBroker} = require("../controller/brokerController");

router.post("/addBroker",addBroker);


module.exports = router;