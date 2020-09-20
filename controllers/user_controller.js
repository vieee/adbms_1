const path = require("path")
const User = require("../models/user")

exports.userLogin = (req, res, next) => {
    const useremail = req.body.email
    const password = req.body.password

    if (!User.isAlreadyRegistered(useremail, password)) {
        req.user = User.findByEmail(useremail)
    }
    console.log("Logging in user..!")
    res.sendFile(path.join(__dirname, "..", "views", "login.html"))
}

exports.userSignup = (req, res, next) => {
    const username = req.body.username
    const password = req.body.password
    const useremail = req.body.email
    console.log("Logging in user..!")

    const user = new User(useremail, username, password)
    res.sendFile(path.join(__dirname, "..", "views", "signup.html"))
}

exports.userHome = (req, res, next) => {
    const username = req.body.username
    const password = req.body.password
    console.log("Logging in user..!")
    res.sendFile(path.join(__dirname, "..", "views", "home.html"))
}