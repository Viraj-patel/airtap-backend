var mysql = require("mysql");
var connection = mysql.createPool({
  host: "airtap.in",
  user: "u647752729_airtap",
  password: "Yash@1234567",
  database: "u647752729_airtap",
});
// connection.query("SELECT * FROM user_details", (error, results, fields) => {
//   if (error) throw error;
//   console.log(results);
// });
module.exports = connection;
