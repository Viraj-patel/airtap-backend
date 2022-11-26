var mysql = require("mysql");
var connection = mysql.createPool({
  host: "me.airtap.in",
  user: "navkarin_airtap",
  password: "&tX]8n5ckVFe",
  database: "navkarin_airtap",
});
module.exports = connection;
