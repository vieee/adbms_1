const express = require("express");

const login = require("./controllers/user_controller")



const app = express()

app.use('/login', login.userLogin);
app.use('/home', login.userHome);
app.use('/signup', login.userSignup);


app.listen(3000)