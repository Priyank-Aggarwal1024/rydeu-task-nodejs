const Pricing = require("../models/pricing.model");
const { calculateDistance } = require("./distanceService");
const citiesNoEmailRequired = ["London", "Paris"];
const checkEmailService = async (pickup, destination, city) => {
  try {
    const pricingData = await Pricing.findOne({
      city: city,
      vehicle_type: "Economy",
    });
    if (!pricingData) {
      return {
        success: false,
        message: "City pricing data not found",
        status: 404,
      };
    }
    const distanceData = await calculateDistance(pickup, destination);
    if (!distanceData.success) {
      return distanceData;
    }
    let emailRequired =
      !citiesNoEmailRequired.includes(city) &&
      (distanceData?.distance > 30 || pricingData.base_amount < 50);
    if (distanceData?.distance && distanceData.distance > 1000) {
      return {
        message: "Too far to offer ride.",
        success: true,
      };
    }
    return {
      success: true,
      email_required: emailRequired,
    };
  } catch {
    return {
      message: err.message || "Internal Server Error",
      status: 500,
      success: false,
    };
  }
};
module.exports = { checkEmailService };
