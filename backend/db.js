const mongoose = require("mongoose");

const mongoURI =
  "mongodb://localhost:27017";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected!");
  } catch (err) {
    console.error(err);
  }
};

module.exports = mongoDB;
