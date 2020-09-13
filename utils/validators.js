const {
    body
} = require("express-validator")


exports.login = [
    body("email").isEmail().withMessage("Please enter a correct Email ID"),
    body("password").isAlphanumeric().withMessage("Password must contain alphabets and numbers").isLength({
        min: 8
    }).withMessage("Password must be atleast 8 digits long")
]

exports.signup = [
    body("email").isEmail().withMessage("Please enter a correct Email ID"),
    body("name").isString().isLength({min: 2}).withMessage("Please enter a valid name"),
    body("password").isAlphanumeric().withMessage("Password must contain alphabets and numbers").isLength({
        min: 8
    }).withMessage("Password must be atleast 8 digits long")
]