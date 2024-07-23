const express = require("express")
const { signupSchema, signinSchema } = require("../types")
const jwt = require("jsonwebtoken")
const { User } = require("../db")
const { default: JWT_secret } = require("../config")
const { authMiddleware } = require("../middleware")

const router = express.Router()

router.post("/signup", async function (req, res) {

    const PayLoad = req.body
    const parsedPayLoad = signupSchema.safeParse(PayLoad)
    if (!parsedPayLoad.success) {
        res.status(411).json({
            msg: "Invalid Inputs"
        })
        return;
    }
    const checker = await User.findOne({
        username: req.body.username
    })
    if (checker) {
        res.status(411).json({
            msg: "Username already taken!"
        })
        return;
    }
    const newuser = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })
    const userId = newuser._id
    const token = jwt.sign({ userId }, JWT_secret)
    res.json({
        message: "User created successfully",
        token: token
    })


})

router.post("/signin", async function (req, res) {

    const PayLoad = req.body
    const parsedPayLoad = signinSchema.safeParse(PayLoad)
    if (!parsedPayLoad.success) {
        return res.status(411).json({
            message: "Error while logging in"
        })
    }
    const checker = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })
    if(checker){
        const userId = checker._id
        const token = jwt.sign({userId}, JWT_secret)
        res.json({
            token: token
        })
        return
    }
    else {
        res.status(411).json({
            message: "Error while logging in"
        })
    }
    
})
router.put("/", function(req,res,next) {

    

})

module.exports = router