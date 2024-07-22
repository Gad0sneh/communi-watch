const User = require('../model/userModel');
const bcrypt = require("bcrypt");

const securePassword = async(password) => {
    try {

      const passwordHash = await bcrypt.hash(password, 10);
      return passwordHash;
        
    } catch (error) {
        console.log(error.message)
    }

}


const config = require("../model/userModel");

const loadsignup = async (req, res) => {
    try {
        res.render("signup");
        
    } catch (error) {
        console.log(error.message);
    }
}


const insertUser = async(req, res) => {
    try {

        const spassword = await securePassword(req.body.password);

        const user = new User ({
            email: req.body.email,
            mobile: req.body.mobile,
            password:spassword,
            name: req.body.name
        });

        const userData = await user.save();

        if(userData) {
            res.render("login",{message: "your registration has been succesful"})
        }
        else {
            res.render("signup", {message: "your registration has been failed"})
        }
        
    } catch (error) {
        console.log(error.message);
    }
}



const loginLoad = async (req, res) => {
    try {
        res.render("login")
        
    } catch (error) {
        console.log(error.message)
    }
}

const verifyLogin = async (req, res ) => {
    try {

        const email = req.body.email;
        const password = req.body.password;
        
        const userData = await User.findOne({email:email});

        if (userData) {

            const passwordMatch = await bcrypt.compare(password,userData.password);
            if (passwordMatch){

                if(userData.is_verified === passwordMatch ){
                    res.render("login", {message: "please verify your mail"})
                } else {
                    req.session.user_id = userData._id;
                    res.redirect("/dashboard")
                }
                
            } else {
                res.render("login",{message: "username and password is incorrect"})
            }

        } else {
            res.render("login",{message: "email and password is incorrect"})
        }

    } catch (error) {
        console.log (error.message)
    }
}

const loadHome = async (req, res) => {
    try {
        // const userData = await User.findById({_id: req.session.user_id})
        res.render("dashboard")
        
    } catch (error) {
        console.log(error.message)
    }
}


module.exports = {
    loadsignup,
    insertUser,
    loginLoad, 
    verifyLogin,
    loadHome,
}