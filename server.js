/* 
***********************************************
*Author: LazyLoaders                          *
*Project 2: Friendify                         *
*UCB Extension - Full-Stack Bootcamp          *
*September 2018                               *
*********************************************** 
*/


// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
var exphbs = require("express-handlebars");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
// var db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
// app.use(express.static(path.join(__dirname, 'app/public')));
app.use(express.static('public'));
app.use(express.static("views"));

//Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Routes
// =============================================================
// require("./app/routes/friend-api-routes.js")(app);
// require("./app/routes/html-routes.js")(app);
require("./routes/friend-api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
// db.sequelize.sync().then(function() {
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
// });

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});




