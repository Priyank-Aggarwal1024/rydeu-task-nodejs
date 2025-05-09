const mongoose = require("mongoose");

const pricingSchema = new mongoose.Schema({
  country: String,
  city: String,
  vehicle_type: String,
  airport_fee: Number,
  per_hour: Number,
  per_km: Number,
  base_amount: Number,
  base_km: Number,
  city_flag: Boolean,
});

module.exports = mongoose.model("Pricing", pricingSchema);
