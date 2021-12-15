var mysql = require("mysql");
var connection = mysql.createPool({
  host: "sql6.freemysqlhosting.net",
  user: "sql6459249",
  password: "rfNwFCXegJ",
  database: "sql6459249",
});
module.exports = connection;
