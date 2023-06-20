const mongoose = require("mongoose");

require("dotenv").config();

const { DB_HOST, PORT = 3001 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Database connection successful");
    });
  })
  .catch((error) => {
    console.log(error.message);
    // закриваємо запущені процеси, 1 означає закрити з невідомою помилкою
    process.exit(1);
  });

const app = require("./app");
