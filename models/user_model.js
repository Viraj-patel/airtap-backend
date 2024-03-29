var db = require("../dbconnect");
var Product = {
  getUserDetails: function (user, callback) {
    return db.query(
      "select * from user_details as ud join company_details as cd on ud.id=cd.fk_user_id join mobile_number as mn on mn.fk_user_id=ud.id join social_media_details as smd on smd.fk_user_id=ud.id where ud.unique_id=? or ud.id=?",
      [user.id, user.id],
      callback
    );
  },
  getNewUserDetails: function (user, callback) {
    return db.query(
      "SELECT t.body,uf.field_id,uf.value FROM `user_info` as ui join template as t on t.id=ui.template_id join user_fields as uf on uf.fk_user_id=ui.id WHERE unique_id=?",
      [user.unique_id],
      callback
    );
  },
};
module.exports = Product;
