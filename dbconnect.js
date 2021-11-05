var mysql = require("mysql");
var connection = mysql.createPool({
  host: "sql6.freemysqlhosting.net",
  user: "sql6449158",
  password: "YFRFdw2U9P",
  database: "sql6449158",
});
module.exports = connection;
