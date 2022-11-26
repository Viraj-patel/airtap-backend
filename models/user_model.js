var db = require("../dbconnect");
var Product = {
  getUserDetails: function (user, callback) {
    return db.query(
      "select * from user_details as ud join company_details as cd on ud.id=cd.fk_user_id join mobile_number as mn on mn.fk_user_id=ud.id join social_media_details as smd on smd.fk_user_id=ud.id where ud.id=?",
      [user.id],
      callback
    );
  },
  updateProductQuantity: function (updateDetails, callback) {
    return db.query(
      "Update product set quantity=? where barcode=?",
      [updateDetails.quantity, updateDetails.barcode],
      callback
    );
  },
};
module.exports = Product;
