const express = require("express");
const router = express.Router();
const controller = require("../controllers/getTouchController");

router.post("/post-getTouch", controller.handlePostGetTouch);
module.exports = router;
