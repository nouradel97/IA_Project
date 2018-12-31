const createError = require('http-errors');
const express = require('express');
const path = require('path');
let app = express();
var session = require('express-session');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const typeorm = require('typeorm');

const logger = require('morgan');
const cookieParser = require('cookie-parser');

app.use(express.static(path.join(__dirname, '../public')));
// app.set('views', path.join(__dirname, '../views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

const login_signup = require('./controllers/login-signup');
const createExam=require('./controllers/createExam');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '/login.html'));
});

app.get('/hr-home', function(req, res, next) {
    res.sendFile(path.join(__dirname, '/hr-home.html'));
});

app.get('/home', function (req, res) {
    res.render('home-page', { email:"lol"});
});
app.post('/login', function (req, res) {
    login_signup.login(req,res);
});

app.post('/register', function (req, res) {
   login_signup.register(req,res);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

app.get('/examLinks', function(req, res) {
    res.sendFile(path.join(__dirname,'/ExamsLinks.html'));
});

app.post('/exam',function (req,res) {
    createExam.createExam(req,res);
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

typeorm.createConnection().then(async (connection) => {

    app.listen(3000, function () {
        console.log("server is running up !!");
    });

});

module.exports = {app};
//const application=require('./default');

