const { checkEmailService } = require("../services/checkEmailService");
const { calculateDistance } = require("../services/distanceService");

const getDistance = async (req, res) => {
  try {
    const { pickup, destination, city, email } = req.body;
    if (!pickup || !destination || !city) {
      return res.json({
        message: "Missing required fields!",
        success: false,
        status: 400,
      });
    }
    const isEmailRequired = await checkEmailService(pickup, destination, city);
    if (isEmailRequired?.email_required && !email) {
      return res.json({
        success: false,
        message: "Email is required!",
        status: 400,
      });
    }
    const distanceData = await calculateDistance(pickup, destination);
    return res.json(distanceData);
  } catch (err) {
    console.log(err);
    return res.json({
      message: err.message || "Internal Server Error",
      success: false,
      status: 500,
    });
  }
};
module.exports = { getDistance };
