const mysql = require('mysql2')
const password = require("../noola");

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'adbms_login_1',
    password: password
})

module.exports = pool.promise()