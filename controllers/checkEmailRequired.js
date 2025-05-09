const { checkEmailService } = require("../services/checkEmailService");

const checkEmailRequired = async (req, res) => {
  try {
    const { pickup, destination, city } = req.body;
    if (!pickup || !destination || !city) {
      return res
        .status(400)
        .json({ message: "Missing required fields!", success: false });
    }
    const data = await checkEmailService(pickup, destination, city);
    return res.json(data);
  } catch (err) {
    return res.status(500).json({
      message: err.message || "Internal Server Error",
      success: false,
    });
  }
};
module.exports = {
  checkEmailRequired,
};
