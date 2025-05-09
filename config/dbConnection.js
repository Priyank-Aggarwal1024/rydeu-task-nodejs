const mongoose = require("mongoose");
const connectToDb = async () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connection successful.");
    })
    .catch((err) => console.log(err));
};
module.exports = connectToDb;
