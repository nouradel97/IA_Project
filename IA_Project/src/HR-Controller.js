const  HR_Account = require("../entity/HR_Account").HR_Account;
const  PositionRequest = require("../entity/PositionRequest").PositionRequest;
const  Position = require("../entity/Position").Position;

const typeorm = require("typeorm");
const User = require('../entity/User').User;
var path = require('path');

function viewAllRequests(req, res) {
    var sessionId = "1";
    // var sessionId = req.session.id;
    const uRepo = typeorm.getRepository(HR_Account);
    const rRepo = typeorm.getRepository(PositionRequest);

    var positions = [];
    var requestedPositions = [];

    uRepo.findOne(sessionId, {relations: positions}).then( async (user) => {
        for(var i=0; i<positions.length; i++){
            let temp = rRepo.find({where: {positions:positions, isRequested:'true', isRejected:'false'},relations:["positionId","user"]});
            requestedPositions.push(temp);
        }
        res.send({'data' : requestedPositions});
    });
}

function disapproveRequest(req, res){

    const uRepo = typeorm.getRepository(PositionRequest);

    uRepo.findOne(req.body.requestedPos).then( async (requestedPos) => {
        requestedPos.isRejected = true;
    });
}

function approveRequest(req, res){

    const uRepo = typeorm.getRepository(PositionRequest);

    uRepo.findOne(req.body.requestedPos).then( async (requestedPos) => {
        requestedPos.isRequested = false;
    });
}

function sendExam(req, res){


}

function addPosition(req, res) {

    //var email = req.session.email;
    var email = "1";
    var pos = req.body.pos;

    let pRepo = typeorm.getRepository(Position);
    let hRepo = typeorm.getRepository(HR_Account);

    hRepo.findOne(email,{relations:["positions"]}).then( async (user) => {
        pos = new Position();
        pos.hr = user;
        pos.description = req.body.pos;
        pRepo.save(pos);
    });
}
function viewAllExams(req, res) {


}

module.exports = { addPosition,approveRequest, disapproveRequest, viewAllRequests, viewAllExams, sendExam };
