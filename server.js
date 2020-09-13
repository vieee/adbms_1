const express = require("express")
const path = require('path')
const bodyParser = require("body-parser")

const login = require("./controllers/user_controller")
const error = require("./controllers/error_controller")
const validator = require("./utils/validators")
const User = require("./models/user")


const app = express()

app.set("views", "views")
app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use('/login', validator.login, login.userLogin)
app.use('/home', login.userHome)
app.use('/signup', validator.signup, login.userSignup)
app.use(error.errorHandler)


app.listen(3000)