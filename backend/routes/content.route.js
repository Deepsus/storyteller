const express = require("express");
const router = express.Router();
const { getContentById } = require("../controllers/content.controller.js");

router.get("/:id", getContentById);

module.exports = router;
