const router = require("express").Router();
const services = require("../services");
const controller = require("../controller");

// we can put the function in service folder which the user will seen on browser
router.get("/", services.home);
router.get("/login", services.login);
router.get("/registration", services.registration);
router.get("/success", services.success);

// we can put the function in controller folder which the user will not seen on browser means backend services
router.get("/api", controller.getUser);

router.post("/register", controller.registration);

router.post("/login", controller.login);

module.exports = router;
