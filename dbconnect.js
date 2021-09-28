var mysql = require("mysql");
var connection = mysql.createPool({
  host: "sql6.freemysqlhosting.net",
  user: "sql6440853",
  password: "MiKEsbZCLp",
  database: "sql6440853",
});
module.exports = connection;
