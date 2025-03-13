const pgp = require("pg-promise")();
require("dotenv").config();

const db = pgp({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

db.connect()
  .then((obj) => {
    console.log("Connected to PostgreSQL");
    obj.done();
  })
  .catch((error) => {
    console.log("Database connection error:", error.message);
  });

module.exports = db;
