// Requiring our models
var db = require("../models/friend.js");

var Friend = require("../models/friend.js")
module.exports = function (app) {

    // POST route for registering a new user
    app.post("/api/signup", function (req, res) {
        db.Friend.create(req.body).then(function (dbSignup) {
            res.json(dbSignup);
        });
    });


    app.post("/api/new", function (req, res) {
        console.log("New Friend: ");
        console.log(req.body);

        Friend.create(req.body).then(function (data) {
            res.json(data);

        });

    });

    // Use Handlebars to render the user profile page
    app.get("/api/profile", function (req, res) {

        Friend.findOne({
            where: {
                // id: req.params.id
                id: req.query.id
            }
        }).then(function (result) {
            // return res.json(result);
            console.log(result.dataValues);
            res.render("profile", result.dataValues);
        });
    });

    app.get("/api/signIn", function (req, res) {
        Friend.findOne({
            where: {
                email: req.query.email,
                password: req.query.password
            }
        }).then(function (result) {
            if (result) {
                console.log(result.dataValues);
            }
            res.json(result);
        });
    });
};