var mysql = require('mysql');
import dotenv from 'dotenv';
dotenv.config();

const con = mysql.createConnection({
    host: process.env.HOST_MYSQL || "127.0.0.1",
    user: process.env.USER_MYSQL || "root",
    password: process.env.PASSWORD_MYSQL || ""
});

con.connect(function (err) {
    if (err) throw err;
    console.log('Connect Success!');
});

module.exports = {
    createConnection() {
        return con;
    },
}