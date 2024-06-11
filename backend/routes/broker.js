const router = require("express").Router();
const {
  addBroker,
  verifyProperty,
  unverifiedProperty,
  verifiedProperty,
 getAllBroker,
 getVerifyPropertyDetail} = require("../controller/brokerController");

router.post("/addBroker", addBroker);
router.post("/verifyProperty", verifyProperty);
router.get("/unverifiedProperty", unverifiedProperty);
router.get("/verifiedProperty", verifiedProperty);
router.get('/getAllBroker', getAllBroker);
router.get("/getVerifyPropertyDetail",getVerifyPropertyDetail);

module.exports = router;
