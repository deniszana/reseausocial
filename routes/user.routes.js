const router = require("express").Router();
const authController = require("../controllers/auth.controller");

// auth
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logout);
router.get("/register2", authController.signUp2);


module.exports = router;
