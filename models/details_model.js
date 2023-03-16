var db = require("../dbconnect");

var Details = {
  checkUserDetails: function (details, callback) {
    return db.query(
      "select id from user_details where id=? and password=?",
      [details.id, details.password],
      callback
    );
  },
  updateuserDetails: function (updateDetails, callback) {
    return db.query(
      "UPDATE user_details SET name=?,whatsapp=? WHERE id=?",
      [updateDetails.name, updateDetails.whatsapp, updateDetails.id],
      callback
    );
  },
  updateCompanyDetails: function (updateDetails, callback) {
    return db.query(
      "UPDATE company_details SET company_name=?,Designation=?, emailid=?, website=?, address=?, map=? WHERE id=?",
      [
        updateDetails.company_name,
        updateDetails.designation,
        updateDetails.emailid,
        updateDetails.website,
        updateDetails.address,
        updateDetails.map,
        updateDetails.id,
      ],
      callback
    );
  },
  updatSocialMediaDetails: function (updateDetails, callback) {
    return db.query(
      "UPDATE social_media_details SET instagram=?,facebook=?, youtube=?, twitter=?, linkedin=? WHERE id=?",
      [
        updateDetails.instagram,
        updateDetails.facebook,
        updateDetails.youtube,
        updateDetails.twitter,
        updateDetails.linkedin,
        updateDetails.id,
      ],
      callback
    );
  },
  updateuserDetails: function (updateDetails, callback) {
    return db.query(
      "UPDATE user_details SET name=?,whatsapp=? WHERE id=?",
      [updateDetails.name, updateDetails.whatsapp, updateDetails.id],
      callback
    );
  },
  updateMobileDetails: function (updateDetails, callback) {
    return db.query(
      "UPDATE mobile_number SET number=? WHERE id=?",
      [updateDetails.number, updateDetails.id],
      callback
    );
  },
  updateProfileImage: function (updateDetails, callback) {
    return db.query(
      "UPDATE user_details SET profile_pic=? WHERE id=?",
      [updateDetails.fileName, updateDetails.id],
      callback
    );
  },
  insertCompanyDetails: function (updateDetails, callback) {
    return db.query(
      "INSERT INTO `company_details`( `fk_user_id`, `company_name`, `company_description`, `website`) VALUES (?,?,?,?)",
      [
        updateDetails.id,
        updateDetails.company_name,
        updateDetails.company_description,
        updateDetails.website,
      ],
      callback
    );
  },
  createUser: function (body, callBack) {
    return db.query(
      "INSERT into `user_details`(password, unique_id) VALUES (?,?)",
      [body.password, body.unique_id],
      callBack
    );
  },
  createUserCompany: function (body, callBack) {
    return db.query(
      "INSERT into `company_details`(fk_user_id) VALUES (?)",
      [body.id],
      callBack
    );
  },
  createUserSocialmedia: function (body, callBack) {
    return db.query(
      "INSERT into `social_media_details`(fk_user_id) VALUES (?)",
      [body.id],
      callBack
    );
  },
  createUserMobile: function (body, callBack) {
    return db.query(
      "INSERT into `mobile_number`(fk_user_id) VALUES (?)",
      [body.id],
      callBack
    );
  },
  insertSocialMediaDetails: function (updateDetails, callback) {
    return db.query(
      "INSERT INTO `social_media_details`( `fk_user_id`, `instagram`, `facebook`, `linkedin`, `twitter`, `upi`, `map`, `youtube`, `snapchat`) VALUES (?,?,?,?,?,?,?,?,?)",
      [
        updateDetails.id,
        updateDetails.instagram,
        updateDetails.facebook,
        updateDetails.linkedin,
        updateDetails.twitter,
        updateDetails.upi,
        updateDetails.map,
        updateDetails.youtube,
        updateDetails.snapchat,
      ],
      callback
    );
  },
};
module.exports = Details;
