var express = require("express");
var path = require("path");
var reqPath = path.join(__dirname, '../');
console.log(reqPath);

var people = require("../data/friends.js");

var router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Displays all characters
router.get("/api/friends", function(req, res) {
    return res.json(people);
  });
  
  // Create New Characters - takes in JSON input
router.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    console.log("YO");
    var newPerson = req.body;
  
  //   // Using a RegEx Pattern to remove spaces from newCharacter
  //   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  //   newPerson.routeName = newPerson.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newPerson);
  
    people.push(newPerson);
  
    res.json(newPerson);
  });

module.exports = router;