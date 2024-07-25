const express = require("express")
const router = express.Router()
const { authMiddleware } = require("../authMiddleware")
const { Account } = require("../db")
const { default: mongoose } = require('mongoose');


router.get("/balance", authMiddleware, async (req, res) => {


    const account = await Account.findOne({
        userId: req.userId
    })
    res.json({
        balance: account.balance
    })
})
router.post("/transfer", authMiddleware, async (req, res) => {
    // starting the transaction
    const session = await mongoose.startSession()
    session.startTransaction()
    
    const senderID = req.body.to
    const amount = req.body.amount

    // Fetching the accounts within the transaction and aborting on invalid inputs
    const account = await Account.findOne({
        userId: req.userId
    }).session(session)
    if (account.balance < amount) {
        await session.abortTransaction()
        return res.status(400).json({
            message: "Insufficient Balance"
        })
    }
    const to = await Account.findOne({
        userId: senderID
    }).session(session)
    if (!to) {
        await session.abortTransaction()
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
    ).session(session)
    await Account.updateOne({ userId: senderID },
        {
            $inc: {
                balance: amount
            }
        }
    ).session(session)
    // commiting the transaction
    await session.commitTransaction()
    res.json({
        message: "Transfer Successful"
    })

})
module.exports = router
