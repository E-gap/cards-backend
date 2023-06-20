const mongoose = require("mongoose");

require("dotenv").config();

const { PORT = 3001 } = process.env;

mongoose
  .connect(process.env.DB_HOST)
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
