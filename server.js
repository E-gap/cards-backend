const mongoose = require("mongoose");
const app = require("./app");

require("dotenv").config();

const { DB_HOST, PORT = 3001 } = process.env;

console.log(DB_HOST);
console.log(DB_HOST.toString());

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
