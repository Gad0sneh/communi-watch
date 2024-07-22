
const express        = require("express");
const app            = express();
const port           = 1111;
const bodyparser = require("body-parser");


const mongoose       = require("mongoose");
mongoose.connect("mongodb://localhost:27017/communalsweetheaven");


//for user routes

const user_route = require("./routes/userRoute");
app.use("/",user_route);


user_route.set("view engine", "ejs");

app.use(express.static("public"));



















































































// userschema.plugin(passportLocalMongoose);

// const User = mongoose.model("User", userschema);

// passport.use(User.createStrategy());


// app.use(session({
//     secret: "Our secret",
//     resave: false,
//     saveUninitialized: false
// }));

// app.use(passport.initialize());
// app.use(passport.session());



// passport.serializeUser(function(user, done) {
//     done(null, user.id);
//   });
  
//   passport.deserializeUser(function(id, done) {
//     User.findById(id, function (err, user) {
//       done(err, user);
//     });
// });



// app.post("/login", (req, res) => {
//     const email = req.body.email;
//     const password = md5(req.body.password);

//     User.findOne({email: email}, (err, foundUser) => {
//         if(err){
//             console.log(err);
//         } else {
//            if(foundUser){
//                 if (foundUser.password === password){
//                     res.redirect("dashboard");
//                 }
//             }
//         } 
//     });
// });





// // signup normal 
// // app.post("/signup", async (req, res,) =>{



// //     const newUser =  new User({
// //         email: req.body.email,
// //         name: req.body.name,
// //         password: md5(req.body.password),
// //         mobile: req.body.mobile
// //     });


// //     newUser.save((err) => {
// //         if(err){
// //             console.log(err)
// //         } else{
// //             res.render("login", {message: "user have been saved successful"})
// //             console.log("USER saved successful")
// //         }
// //     });
// // });

// app.post("/signup", (req, res) => {
//     User.register({username: req.body.username}, req.body.password, function (err){
//         if(err){
//             console.log(err);
//             res.redirect("/signup");
//         } else{
//             passport.authenticate("local")(req, res, function(){
//                 res.redirect("/login");
//             })
//         }
//     })
// });







// app.get("/", function(req, res){
//     res.render("index")
// });

// app.get("/login", function(req, res){
//     res.render("login")
// });

// app.get("/signup", function(req, res){
//     res.render("signup")
// });




app.listen(port, () => {
    console.log("port running at sweetheaven");
});




