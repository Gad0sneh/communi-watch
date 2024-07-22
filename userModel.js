const { name } = require("ejs");
const mongoose       = require("mongoose");
mongoose.connect("mongodb://localhost:27017/communalsweetheaven");
mongoose.set('strictQuery', false);



const userSchema = new mongoose.Schema({
    name: {
        type : String,
        require : true
    },

    email: {
        type: String,
        require: true
    },
    mobile: {
        type: Number,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    is_verified: {
        type: Number,
        default: 0
    }

})

module.exports = mongoose.model('user', userSchema);