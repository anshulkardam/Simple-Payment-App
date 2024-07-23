const { decode } = require("jsonwebtoken")
const { default: JWT_secret } = require("./config")
const { User } = require("./db")

const authMiddleware = async(req,res,next) => {

        const token = req.headers.authorization
        if (!token || !token.startsWith('Bearer ')) {
            return res.status(403).json({ message : " Invalid token "});
        }

        const actualtoken = token.split(" ")[1];
        try {
        const decoded = jwt.verify(actualtoken, JWT_secret)
        if (decoded.userId){
            req.userId = decoded.userId
            next();
        } else {
            res.status(403).json({ message : "Wrong Username/Password from userId section" })
        }
        
        } catch(e) {
            res.status(403).json({ message : "Wrong Username/Password" })
        }
        


}
module.exports = {
    authMiddleware
}