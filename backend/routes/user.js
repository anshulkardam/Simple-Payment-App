const express = require("express")
const router = express.Router()
const { signupSchema, signinSchema, updateSchema } = require("../types")
const jwt = require("jsonwebtoken")
const { User, Account } = require("../db")

const { authMiddleware } = require("../authMiddleware")
const { JWT_secret } = require("../config")


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
    await Account.create({
        userId : newuser._id,
        balance : parseFloat((1 + Math.random() * 10000).toFixed(2))
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
router.put("/", authMiddleware, async function(req,res) {

    const PayLoad = req.body;
    if(PayLoad.username){
        return res.status(411).json({
            message: "username cant be changed"
        })
    }
    const parsedPayLoad = updateSchema.safeParse(PayLoad)
    if(!parsedPayLoad.success){
        return res.status(411).json({
            message: "Error while updating information"
        })
    }
    console.log(PayLoad.username)
    await User.updateOne({_id: req.userId} , req.body)

    res.json({
        message: "Updated successfully"
    })

})

router.get("/bulk", authMiddleware, async (req,res) => {

        const filter = req.query.filter || "" ;
        const users = await User.find({

            $or : [{
                firstName: {
                    $regex : filter
                }
            },{
                lastName: {
                    $regex : filter
                }

            }]
        })
        const to = await User.findOne({
            _id: req.userId
        })
        res.json({
            user: users.map(user => ({
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                _id: user._id

            })).filter(value => value._id.toString() !== to._id.toString())
            
        })
})

module.exports = router