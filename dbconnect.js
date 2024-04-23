var mysql = require("mysql");
var connection = mysql.createPool({
  host: "srv1403.hstgr.io",
  user: "u647752729_airtap",
  password: "Yash@1234567",
  database: "u647752729_airtap",
});

module.exports = connection;
