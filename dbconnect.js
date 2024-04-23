var mysql = require("mysql");
var connection = mysql.createPool({
  host: "193.203.184.85",
  user: "u647752729_airtap",
  password: "Yash@1234567",
  database: "u647752729_airtap",
});

module.exports = connection;
