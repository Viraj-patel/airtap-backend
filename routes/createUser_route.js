var details = require("../models/details_model");
var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  const password = Date.now() % 10000;
  details.createUser({ password }, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json({ id: rows.insertId, password });
    }
  });
});
module.exports = router;
