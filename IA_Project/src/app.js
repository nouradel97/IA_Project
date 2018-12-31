var createError = require('http-errors');
var express = require('express');
const session = require('express-session');
var path = require('path');
var app = express();

const typeorm = require('typeorm');

var candidate = require('./controllers/CandidateController');
var hr = require('./controllers/HR-Controller');

var logger = require('morgan');
var cookieParser = require('cookie-parser');

app.use(express.static(path.join(__dirname, '../public')));
// app.set('views', path.join(__dirname, '../views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(session({secret: "I have a serious confession..."}));

const login_signup = require('./controllers/login-signup');

app.use(session({
    secret: 'I have a serious confession to make...',
    resave: false,
    saveUninitialized: true,
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '/login.html'));
});

app.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname, '/candidate.html'));
});

app.post('/getInfo', function (req, res) {
    candidate.viewInfo(req, res);
});

app.post('/getAllPositions', function (req, res) {
    candidate.getAllRequests(req, res);
});

app.get('/register', function (req, res) {
    res.sendFile(path.join(__dirname, '/register.html'));

});
*/
/*
app.post('/login', function (req, res) {
    login_signup.login(req,res);
});

app.post('/register', function (req, res) {
   login_signup.register(req,res);
});

app.post("/addPosition",function (req,res) {
    hr.addPosition(req,res);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});
*/
/*
app.get('/', function(req, res) {
    res.sendFile(path.join('C:\\Users\\asala\\Documents\\GitHub\\IA_Project\\IA_Project\\views\\ExamsLinks.html'));
});*/
/*
// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send('/error.html');
});
*/

typeorm.createConnection().then(async (connection) => {

    app.listen(3000, function () {
        console.log("server is running up !!");
    });

});

module.exports = {app};
const application=require('./default');

