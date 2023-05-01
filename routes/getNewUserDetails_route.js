var product = require("../models/user_model.js");
var express = require("express");
var router = express.Router();
router.get("/", function (req, res, next) {
  console.log(req.query);
  product.getNewUserDetails(req.query, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      console.log(rows);
      res.json(rows);
    }
  });
});
module.exports = router;
