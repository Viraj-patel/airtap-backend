var details = require("../models/details_model");
var express = require("express");
var router = express.Router();

router.post("/", function (req, res, next) {
  details.checkUserDetails(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      console.log(rows);
      res.json(rows);
      console.log(rows);
    }
  });
});
module.exports = router;
