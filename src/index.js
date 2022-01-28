var path = require('path');
var morgan = require('morgan');
var express = require('express');
var { engine } = require('express-handlebars');
var app = express();
var port = 8000;

// HTTP logger
app.use(morgan('combined'));
// handlebars
app.engine('handlebars', engine());
app.set('views engine', 'html');
app.set('views', path.join(__dirname,'views'));

app.get('/', function (req, res) {
    res.render('home');
})

app.listen(port);