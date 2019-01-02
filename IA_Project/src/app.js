let app = express();
var session = require('express-session');
var Position = require('./entity/Position');

var candidateController = require('./controllers/CandidateController')
var candidateController = require('./controllers/CandidateController');
var positionController = require('./controllers/PosititonController');
var hrController = require('./controllers/HR-Controller');

var User = require('./entity/User');

const bodyParser = require('body-parser');
app.post('/getInfo', function (req, res) {
    candidateController.viewInfo(req, res);
});

app.post('/getAllPositions', function (req, res) {
    positionController.getAllPositions(req, res);
});

app.post('/addPosition', function (req, res) {
        hrController.addPosition(req, res);
});

app.post('/getAllPositions', function (req, res) {
    positionController.getAllPositions(req, res);
});

app.post('/getAllUserPositions', function (req, res) {
        positionController.getAllUserPositions(req, res);
});


app.post('/getAllHrPositions', function (req, res) {
    positionController.getAllHrPositions(req, res);
});

app.post('/makeRequest', function (req, res) {
            candidateController.makeRequest(req,res);
        });

        app.get('/hr-home', function (req, res, next) {
                res.sendFile(path.join(__dirname, '/hr-home.html'));
            });

            app.get('/register', function (req, res, next) {
                app.post('/register', function (req, res) {
                    login_signup.register(req, res);
                });

                app.post('/getAllRequests', function (req, res) {
                    hrController.viewAllRequests(req, res);
                });

                app.post('/rejectApp', function (req, res) {
                    hrController.disapproveRequest(req, res);
                });

// catch 404 and forward to error handler
                app.use(function (req, res, next) {
                    next(createError(404));