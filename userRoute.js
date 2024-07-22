const express = require("express");
const session = require("express-session")
const user_route = express();
const bodyparser = require("body-parser")

user_route.use(bodyparser.json());
user_route.use(bodyparser.urlencoded({extended: true}))



const userController = require("../controllers/userController");

user_route.use(session({
    secret: "my secret",
    saveUninitialized: false,
    resave: false
}));

user_route.get("/signup", userController.loadsignup);

user_route.post("/signup", userController.insertUser);

user_route.get("/login", userController.loginLoad);
user_route.post("/login", userController.verifyLogin);
user_route.get("/dashboard", userController.loadHome);


user_route.get("/", function(req, res){
    res.render("index")
});

user_route.get("/contact-form", function (req, res){
    res.render("contact-form")
});

user_route.get("/anonymous", function (req, res ) {
    res.render("anonymous")
});

user_route.get("/ourService", function (req, res ) {
    res.render("ourService")
});

user_route.get("/emergency", function(req, res) {
    res.render("emergency")
})

user_route.get("/address", function(req, res) {
    res.render("address")
})



module.exports = user_route;