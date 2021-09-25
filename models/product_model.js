var db = require("../dbconnect");
var Product = {
  addProduct: function (productDetails, callback) {
    return db.query(
      "insert into product(name,barcode) values(?,?)",
      [productDetails.name, productDetails.barcode],
      callback
    );
  },
  getProducts: function (callback) {
    return db.query("Select * from product", callback);
  },
};
module.exports = Product;
