const express = require("express");
const {
  getDistance,
} = require("../controllers/getPickupDestinationDistance.js");
const router = express.Router();
router.get("/get-distance", getDistance);

module.exports = router;
