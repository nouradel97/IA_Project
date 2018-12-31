import {HR_Account} from "../entity/HR_Account";
import {PositionRequest} from "../entity/PositionRequest";
import {Position} from "../entity/Position";

const typeorm = require("typeorm");
const User = require('../entity/User').User;
var path = require('path');

function viewAllRequests(req, res) {

    var sessionId = req.session.id;
    const uRepo = typeorm.getRepository(HR_Account);
    const rRepo = typeorm.getRepository(PositionRequest);

    var positions = [];
    var requestedPositions = [];

    uRepo.findOne(sessionId).then( async (user) => {

        for(var i=0; i<user.positions.length; i++){
                positions.push(user.positions[i]);
        }

        for(var i=0; i<positions.length; i++){
            requestedPositions.push(rRepo.findByIds(positions), {where: {isRequested:'true', isRejected:'false'}});
        }

        res.send({'data' : JSON.stringify(requestedPositions)});
    })

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

    var email = req.session.email;
    var pos = req.body.pos;

    const pRepo = typeorm.getRepository(Position);
    const hRepo = typeorm.getRepository(HR_Account);

    hRepo.findOne(email).then( async (user) => {

        for(var i=0; i<user.positions.length; i++){

            if(user.positions[i] === pos){
                res.send({'code': 400, 'success': 'this description is already exist!!'});
            }
            else {
                pos = new Position();
                pos.hr = user;
                pos.description = req.body.pos;

                pRepo.save(pos);
                res.redirect('/hr-home');
            }
        }
    });
}
function viewAllExams(req, res) {


}

module.exports = { approveRequest, disapproveRequest, viewAllRequests, viewAllExams, sendExam };
