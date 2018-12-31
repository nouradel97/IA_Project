var Position =  require("../entity/Position").Position;
var PositionRequest = require("../entity/PositionRequest").PositionRequest;
var Exam = require("../entity/Exam").Exam;

const typeorm = require("typeorm");
const User = require('../entity/User').User;
var path = require('path');

function viewInfo(req, res) {
    
    const uRepo = typeorm.getRepository(User);
    uRepo.findOne(req.session.email).then(async (user) => {
        
        res.send(JSON.stringify(user));
    })
}

function getAllRequests(req, res) {

    const rRepo = typeorm.getRepository(Position);

    rRepo.find().then(async (positions) => {
        res.send(JSON.stringify(positions));
    });
}

function makeRequest(req, res) {

    var email = req.session.email;
    var positionId = req.body.pos;

    const uRepo = typeorm.getRepository(User);
    const pRepo = typeorm.getRepository(Position);
    const rpRepo = typeorm.getRepository(PositionRequest);

    uRepo.findOne(email).then(async (user) => {

        pRepo.findOne(positionId).then(async (postion) => {

            var request = new PositionRequest();
            request.positionId = postion;
            request.user = user;
            rpRepo.save(request);

        })
    })
}

function startExam(req, res){

    var examId = req.body.examId;
    const eRepo = typeorm.getRepository(Exam);

    eRepo.findOne(examId).then(async (exam) => {
        res.send({'data' : JSON.stringify(exam)});
        
        setTimeout(function () {


            alert('timeout !!');
            res.redirect('/home');
        }, 5000);
    })
}

module.exports = { makeRequest, viewInfo, startExam, getAllRequests}