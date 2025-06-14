const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller.js");

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser); // define loginUser in your controller

module.exports = router;
