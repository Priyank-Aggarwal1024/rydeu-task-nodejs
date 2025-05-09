const distanceData = require("../data/data");

const calculateDistance = async (pickup, destination) => {
  try {
    const result =
      distanceData[pickup] && distanceData[pickup][destination]
        ? { distance: distanceData[pickup][destination], success: true }
        : {
            message: `Can't find distance between ${pickup} to ${destination}`,
            status: 404,
            success: false,
          };
    if (pickup == destination) {
      return {
        success: true,
        distance: 0,
      };
    }
    return result;
  } catch (err) {
    return {
      message: err.message || "Internal Server Error",
      status: 500,
      success: false,
    };
  }
};

module.exports = { calculateDistance };
