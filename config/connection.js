// this is where we create a sql connection, and export the sql object
const mysql = require("mysql2");
const util = require("util");

require("dotenv").config();

const db = mysql.createConnection({
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
});

db.query = util.promisify(db.query);
db.connect = util.promisify(db.connect);

module.exports = db;
