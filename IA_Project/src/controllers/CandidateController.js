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

async function getMyRequests(req, res) {

    const uRepo = typeorm.getRepository(User);
    var user = await uRepo.findOne(req.session.email);

    var arr = [];
    const repo = typeorm.getRepository(PositionRequest);
    var requests = await repo.find({where: {user: user} ,relations: ["positionId","exam"]});

    res.send(JSON.stringify(requests));
}

function makeRequest(req, res) {

    var email = req.session.email;
    var position = req.body.id;

    const uRepo = typeorm.getRepository(User);
    const pRepo = typeorm.getRepository(Position);
    const rpRepo = typeorm.getRepository(PositionRequest);

    uRepo.findOne(email).then(async (user) => {

        pRepo.findOne(position).then(async (position) => {

            var request = new PositionRequest();
            request.positionId = position;
            request.user = user;
            rpRepo.save(request);

        });
    });
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

module.exports = { makeRequest,getMyRequests, viewInfo, startExam}