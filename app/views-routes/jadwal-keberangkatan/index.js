const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("jadwal-keberangkatan/index");
});

module.exports = router;
