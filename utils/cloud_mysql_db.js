const mysql = require('mysql2')
const password = require("../noola").CLOUD;

const pool = mysql.createPool({
    host: 'sql12.freesqldatabase.com',
    user: 'sql12366418',
    database: 'sql12366418',
    password: password
})

module.exports = pool.promise()