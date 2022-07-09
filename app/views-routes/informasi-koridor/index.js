const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("informasi-koridor/index");
});

module.exports = router;
