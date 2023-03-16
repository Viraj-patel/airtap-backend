var details = require("../models/details_model");
var express = require("express");
var router = express.Router();

function generateRandomString(n) {
  let randomString = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < n; i++) {
    randomString += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return randomString;
}

router.get("/", function (req, res, next) {
  const password = Date.now() % 10000;
  const unique_id = generateRandomString(10);
  details.createUser({ password, unique_id }, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      details.createUserCompany({ id: rows.insertId });
      details.createUserMobile({ id: rows.insertId });
      details.createUserSocialmedia({ id: rows.insertId });
      res.json({ id: rows.insertId, password, unique_id });
    }
  });
});
module.exports = router;
