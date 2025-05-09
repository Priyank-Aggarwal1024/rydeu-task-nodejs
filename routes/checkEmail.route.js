const express = require("express");
const { checkEmailRequired } = require("../controllers/checkEmailRequired");
const router = express.Router();
router.post("/check-email", checkEmailRequired);

module.exports = router;
