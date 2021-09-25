var mysql = require("mysql");
var connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "non_sense_store",
});
module.exports = connection;
