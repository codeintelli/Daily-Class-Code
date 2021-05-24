const router = require("express").Router();
const controller = require("../controller");
const store = require("../middleware");
router.get("/", (req, res) => {
  res.render("main");
});



router.post("/uploadmultiple", store.array("images", 12), controller.upload);

module.exports = router;
