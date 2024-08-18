require("dotenv").config();

const express = require("express");
const app = express();

const connectDB = require("./db/db");
connectDB()

/*
(async () => {
  try {
    await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`);
    app.on("error", (err) => {
      console.log("ERR: ", err);
      throw err;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server is listening on PORT: ${process.env.PORT}`);

    });
  } catch (err) {
    console.err("ERROR: ", err);
    throw err;
  }
})();
*/
