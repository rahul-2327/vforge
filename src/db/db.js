require("dotenv").config();
const mongoose = require("mongoose");
const { DB_NAME } = require("./../constants");

const connectDB = async () => {
  try {
    //checking that enviroment variable is loaded correctly
    if (!process.env.DB_URI) {
      throw new Error("DB_URI is not defined in the environment variables");
    }

    // connecting to database
    const connectionInstance = await mongoose.connect(
      `${process.env.DB_URI}/${DB_NAME}`
    );
    console.log(
      `\nMongoDB connected!! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection error ", error);
    process.exit(1);
  }
};

module.exports = connectDB;
