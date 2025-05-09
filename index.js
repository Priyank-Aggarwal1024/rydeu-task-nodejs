const express = require("express");
require("dotenv").config();
const connectToDb = require("./config/dbConnection.js");
const seedPricingData = require("./config/seedPricing.js");
const checkEmailRoute = require("./routes/checkEmail.route.js");
const distanceRoute = require("./routes/distance.route.js");
const logger = require("./middleware/logger.js");
const errorHandler = require("./middleware/errorHandler.js");

const app = express();
const PORT = process.env.PORT;
connectToDb();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
seedPricingData();
app.use(logger);
app.use("/api/v1/ride", checkEmailRoute);
app.use("/api/v1/distance", distanceRoute);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server is listening on : http://localhost:${PORT}`);
});
