var express = require("express");
var path = require("path");
var reqPath = path.join(__dirname, '../');
console.log(reqPath);

var router = express.Router();

// Basic route that sends the user first to the AJAX Page
router.get("/", function(req, res) {
    console.log("Does this work?");
    res.sendFile(path.join(reqPath, "/public/home.html"));
  });
  
router.get("/survey", function(req, res) {
    res.sendFile(path.join(reqPath, "/public/survey.html"));
  });

module.exports = router;