var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const multer = require("multer");
var indexRouter = require("./routes/index");
const fileupload = require("express-fileupload");

var updateuserDetails = require("./routes/updateUserDetails_route");
var updateCompanyDetails = require("./routes/updateCompanyDetails_route");
var updateSocialMediaDetails = require("./routes/updateSocialMediaDetails_route");
var updateMobileDetails = require("./routes/updateMobileDetails_route");
var getUserDetails = require("./routes/getUserDetails_route");
var checkLogin = require("./routes/checkLogin_route");
var createUser = require("./routes/createUser_route");
var profile = require("./models/details_model.js");
var app = express();

var db = require("./dbconnect");

var cors = require("cors");

//
// view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "jade");

app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static("files"));
const bodyParser = require("body-parser");

app.use(fileupload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", indexRouter);

app.use("/getUserDetails", getUserDetails);
app.use("/checkLogin", checkLogin);
app.use("/personalDetails", updateuserDetails);
app.use("/companyDetails", updateCompanyDetails);
app.use("/socialDetails", updateSocialMediaDetails);
app.use("/mobileDetails", updateMobileDetails);
app.use("/createUser", createUser);

app.post("/upload", (req, res) => {
  console.log("=====================", app.port, "=====================");
  const newpath = __dirname + "/public/";
  const file = req.files.file;
  console.log(req.body.id);
  const filename = `${req.body.id}.${
    file.name.split(".")[file.name.split(".").length - 1]
  }`;
  file.mv(`${newpath}${filename}`, (err) => {
    if (err) {
      res.status(500).send({ message: "File upload failed", code: 200 });
    }
    profile.updateProfileImage(
      { ...req.body, fileName: filename },
      function (err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.status(200).send({ message: "File Uploaded", code: 200 });
        }
      }
    );
  });
});

//! Use of Multer
var storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "./public/images/"); // './public/images/' directory name where save the file
  },
  filename: (req, file, callBack) => {
    callBack(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

var upload = multer({
  storage: storage,
});

//@type   POST
//route for post data
app.post("/uploadImage", upload.single("image"), (req, res) => {
  if (!req.file) {
    console.log("No file upload");
  } else {
    console.log(req.file.filename);
    var imgsrc = "http://127.0.0.1:4000/images/" + req.file.filename;
    var insertData = "update user_details set profile_pic = ? where id = ?";
    db.query(insertData, [imgsrc, req.id], (err, result) => {
      if (err) throw err;
      console.log("file uploaded");
    });
  }
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
