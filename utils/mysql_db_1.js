const mysql = require('mysql2')
const password = require("../noola").LOCAL;

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'adbms_login_1',
    password: password
})

module.exports = pool.promise()