const express = require("express");
const router = express.Router();

const homepage = require("./homepage");
const informasiKoridor = require("./informasi-koridor");
const jadwalKeberangkatan = require("./jadwal-keberangkatan");

router.use("/", homepage);
router.use("/informasi-koridor", informasiKoridor);
router.use("/jadwal-keberangkatan", jadwalKeberangkatan);

module.exports = router;
