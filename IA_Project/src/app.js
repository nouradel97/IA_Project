var createError = require('http-errors');
var express = require('express');
var path = require('path');
var app = express();

var connect = require('typeorm');

connect.createConnection().then(async connect =>{
    console.log('db is connected');
}).catch(error => console.log('error',error));

var logger = require('morgan');
var cookieParser = require('cookie-parser');

app.use(express.static(path.join(__dirname, '../public')));
// view engine setup
app.set('views', path.join(__dirname, '../public/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

const login_signUp = require('./controllers/login-signUp');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', function(req, res, next) {
    res.render('login-page.html');
});

app.get('/home', function (req, res) {
    res.render('home-page.html');
});

app.post('/login', function (req, res) {
    login_signUp.login(req,res);
});

app.post('/register', function (req, res) {
   login_signUp.register(req,res);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send('/error.html');
});

app.listen(3000, function () {
    console.log("server is running up !!");
});

module.exports = app;
