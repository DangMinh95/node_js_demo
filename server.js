var http = require('http');
// var configSql = require('./config/sqlquery');
// var mysql = require('./mysqlModule');
// var url = require('url');
// var fs = require('fs');
// var formidable = require('formidable');
// var sqlQuery = require('./sqlquery');
import dotenv from 'dotenv';
dotenv.config();
const express = require('express');
const app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);
const port = process.env.PORT_SERVER || 8080;
// const pathFileUpload = __dirname + '/uploadFile/';

// http.createServer(function (req, res) {
//     var pathName = url.parse(req.url, true).pathname;
//     if (pathName === '/api/upload') {
//         var form = formidable({ uploadDir: __dirname + '/uploadFile' });
//         form.parse(req, function (err, fields, files) {
//             var oldpath = files.dauxanhrauma.filepath;
//             var newpath = files.dauxanhrauma.originalFilename;
//             fs.rename(oldpath, pathFileUpload + newpath, function (err) {
//                 if (err) throw err;
//                 res.write('File uploaded and moved!');
//                 res.end();
//             });
//         });
//     }
//     else {
//         fs.readFile('form.html', function (err, data) {
//             res.write(data);
//             res.end();
//         });
//     }
// }).listen(8080);

app.get("/", function (req, res, next) {
    res.sendFile(__dirname + "/public/index.html");
});
app.use(express.static("public"));

io.on("connection", function (socket) {

    socket.on("join", function (data) {
        console.log(data);
    });

    socket.on("messages", function (data) {
        socket.emit("chat", data);
        // socket.broadcast.emit("chat", data);
    });

    socket.on("ping", (count) => {
        console.log(count);
    });
});

server.listen(port, function () {
    console.log(`Example app listening on port ${port}`)
});