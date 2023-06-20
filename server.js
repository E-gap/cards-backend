const mongoose = require("mongoose");
const app = require("./app");

require("dotenv").config();

/* const { DB_HOST, PORT } = process.env; */

const DB_HOST =
  "mongodb+srv://evhengap:11021985@cluster0.jb42kwc.mongodb.net/usersreader?retryWrites=true&w=majority";

const PORT = 3001;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Database connection successful");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
