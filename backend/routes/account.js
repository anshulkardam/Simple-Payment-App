const express = require("express")
const { authMiddleware } = require("../middleware")
const { Account } = require("../db")

const router = express.Router()

router.get("/balance", authMiddleware, async (req,res,next) =>{

        
        const account = await Account.findOne({
            userId : req.userId
        })
        res.json({
            balance : account.balance
        })
})
router.post("/transfer", authMiddleware, async (req,res)=> {

        // transactions
        
})
module.exports = {
    router
}