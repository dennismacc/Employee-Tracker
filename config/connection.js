// this is where we create a sql connection, and export the sql object
const mysql = require("mysql2");
const util = require("util");


const db = mysql.createConnection({
  host: "localhost",
  user: 'root',
  password: 'root',
  database: 'employees',
  port: '8889',
});

db.query = util.promisify(db.query);
// db.connect((err) => { 
//   console.log(err)
// }); 

module.exports = db;
