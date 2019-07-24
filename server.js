// Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var people = require("./app/data/friends.js");
// Routes
// =============================================================

var routes = require("./app/routing/htmlRoutes.js");

app.use(routes);

// Displays all characters
app.get("/api/friends", function(req, res) {
  return res.json(people);
});

// Create New Characters - takes in JSON input
app.post("/api/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newPerson = req.body;

//   // Using a RegEx Pattern to remove spaces from newCharacter
//   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//   newPerson.routeName = newPerson.name.replace(/\s+/g, "").toLowerCase();

  console.log(newPerson);

  people.push(newPerson);

  res.json(newPerson);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});