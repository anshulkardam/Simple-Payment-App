const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://admin:xjuFZMa47XtqKbxw@cluster0.siklzcx.mongodb.net/Paytm-Simple")

const userSchema = new mongoose.Schema({
        firstName : String,
        lastName : String,
        username : String,
        password : String

})

const accountSchema = new mongoose.Schema({

        userId : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        balance : Number 
})

const User = mongoose.model('User', userSchema)
const Account = mongoose.model('Account', accountSchema)

module.exports = {
    User,
    Account
}