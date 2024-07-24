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

const updateSchema = zod.object({
    password : zod.string().optional(),
    firstName : zod.string().optional(),
    lastName : zod.string().optional(),
})
module.exports = {
    signupSchema,
    signinSchema,
    updateSchema
}