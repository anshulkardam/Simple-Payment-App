const express = require("express")
const { authMiddleware } = require("../middleware")
const { Account } = require("../db")

const router = express.Router()

router.get("/balance", authMiddleware, async (req, res, next) => {


    const account = await Account.findOne({
        userId: req.userId
    })
    res.json({
        balance: account.balance
    })
})
router.post("/transfer", authMiddleware, async (req, res) => {

    // without transactions
    const senderID = req.body.to
    const amount = req.body.amount


    const account = await Account.findOne({
        userId: req.userId
    })
    if (account.balance < amount) {
        return res.status(400).json({
            message: "Insufficient Balance"
        })
    }
    const to = await Account.findOne({
        userId: senderID
    })
    if (!to) {
        return res.status(400).json({
            message: "User not Found$"
        })
    }
    await Account.updateOne({ userId: req.userId },
        {
            $inc: {
                balance: -amount
            }
        }
    )
    await Account.updateOne({ userId: senderID },
        {
            $inc: {
                balance: amount
            }
        }
    )
    res.json({
        message: "Transfer Successful"
    })

})
module.exports = {
    router
}