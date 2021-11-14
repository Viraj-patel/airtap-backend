var mysql = require("mysql");
var connection = mysql.createPool({
  host: "sql6.freemysqlhosting.net",
  user: "sql6451012",
  password: "b5npervpru",
  database: "sql6451012",
});
module.exports = connection;
