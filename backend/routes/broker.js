const router = require("express").Router();
const {addBroker, verifyProperty} = require("../controller/brokerController");

router.post("/addBroker",addBroker);
router.post("/verifyProperty",verifyProperty);


module.exports = router;