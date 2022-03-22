const express = require("express");
const router = express.Router();

const homepage = require("./homepage/index");

router.use("/", homepage);

module.exports = router;
