const zod = require("zod")

const signupSchema = zod.object({
    username : zod.string().email(),
    password : zod.string().min(4),
    firstName: zod.string().min(4),
    lastName : zod.string().min(4)
})
const signinSchema = zod.object({
    username : zod.string().email(),
    password : zod.string().min(4)
})
module.exports = {
    signupSchema,
    signinSchema
}