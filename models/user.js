const db1 = require("../utils/mysql_db_1")
const db2 = require("../utils/mysql_db_2")
const cloud_db = require("../utils/cloud_mysql_db")


module.exports = class User {
    constructor(email, name, password) {
        this.email = email
        this.name = name
        this.password = password
    }

    save() {
        if (Math.random() > 0.5) {
            db1.execute("INSERT INTO users VALUES (?, ?, ?)", [this.email, this.name, this.password])
                .then(user => console.log("User added in DB1"))
                .catch(err => console.log('error', error))
        } else {
            return db2.execute("INSERT INTO users VALUES (?, ?, ?)", [this.email, this.name, this.password])
                .then(user => console.log("User added in DB2"))
                .catch(err => console.log('error', error))
        }
        return cloud_db.execute("INSERT INTO users VALUES (?, ?, ?)", [this.email, this.name, this.password])
            .then(user => console.log("User added in DB2"))
            .catch(err => console.log('error', error))
    }

    static findByEmail(email) {
        return (db1.execute("SELECT * FROM users WHERE email = ?", [email]).then(user => {
                console.log(user)
            }).catch(error => {
                console.log('error', error)
            }) ||
            db2.execute("SELECT * FROM users WHERE email = ?", [email]).then(user => {
                console.log(user)
            }).catch(error => {
                console.log('error', error)
            }))
    }

    static isAlreadyRegistered(email, password) {
        return !(db1.execute("SELECT * FROM users WHERE email = ? AND password = ?", [email, password]).then(user => {
            console.log(user)
        }).catch(error => {
            console.log('error', error)
        }) ||
        db2.execute("SELECT * FROM users WHERE email = ? AND password = ?", [email, password]).then(user => {
            console.log(user)
        }).catch(error => {
            console.log('error', error)
        }))
    }
}