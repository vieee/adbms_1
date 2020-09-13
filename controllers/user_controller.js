const path = require("path")

exports.userLogin = (req, res, next) => {
    const username = req.body.username
    const password = req.body.password
    console.log("Logging in user..!")
    res.sendFile(path.join(__dirname, "..", "views", "login.html"))
}

exports.userSignup = (req, res, next) => {
    const username = req.body.username
    const password = req.body.password
    console.log("Logging in user..!")
    res.sendFile(path.join(__dirname, "..", "views", "signup.html"))
}

exports.userHome = (req, res, next) => {
    const username = req.body.username
    const password = req.body.password
    console.log("Logging in user..!")
    res.sendFile(path.join(__dirname, "..", "views", "home.html"))
}