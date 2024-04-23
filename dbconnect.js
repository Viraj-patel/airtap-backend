var mysql = require("mysql");
var connection = mysql.createPool({
  host: "sql921.main-hosting.eu",
  user: "u647752729_airtap",
  password: "Yash@1234567",
  database: "u647752729_airtap",
});

module.exports = connection;
