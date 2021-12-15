var mysql = require("mysql");
var connection = mysql.createPool({
  host: "sql112.epizy.com",
  user: "epiz_30599988",
  password: "Hh4OWiLjdJSve",
  database: "epiz_30599988_nonsense",
});
module.exports = connection;
