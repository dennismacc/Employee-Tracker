// this is where we create a sql connection, and export the sql object
const mysql = require("mysql2");
const util = require("util");

require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 8889,
});

db.query = util.promisify(db.query);

module.exports = db;
