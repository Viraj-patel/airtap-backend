var details = require("../models/details_model");
var express = require("express");
var router = express.Router();
const _ = require("lodash");

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

router.post("/", function (req, res, next) {
  const password = Date.now() % 10000;
  const unique_id = generateRandomString(10);
  console.log(req.body);
  details.createNewUser(
    { ...req.body, password, unique_id },
    function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        details.getTemplate({ ...req.body }, function (err, templateRows) {
          if (err) {
            res.json(err);
          } else {
            console.log(rows.insertId);
            const template = templateRows[0].body;
            console.log(JSON.parse(template));
            const children = _.flatten(JSON.parse(template).body);
            const value = children
              .map((child) => `('${rows.insertId}', '${child.id}')`)
              .join(",");
            details.addTemplateFields(value, function (err, fieldRows) {
              if (err) {
                res.json(err);
              } else {
                res.json(fieldRows);
              }
            });
          }
        });
      }
    }
  );
});

module.exports = router;
module.exports = router;
