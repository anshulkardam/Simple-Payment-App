const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://admin:xjuFZMa47XtqKbxw@cluster0.siklzcx.mongodb.net/Paytm-Simple")

const userSchema = new mongoose.Schema({
        firstName : String,
        lastName : String,
        username : String,
        password : String

})

const User = mongoose.model('User', userSchema)

module.exports = {
    User
}