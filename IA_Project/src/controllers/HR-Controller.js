const  HR_Account = require("../entity/HR_Account").HR_Account;
const  PositionRequest = require("../entity/PositionRequest").PositionRequest;
const  Position = require("../entity/Position").Position;

const typeorm = require("typeorm");
const User = require('../entity/User').User;
var path = require('path');

function viewAllRequests(req, res) {

    var sessionId = req.session.email;
    const uRepo = typeorm.getRepository(HR_Account);
    const rRepo = typeorm.getRepository(PositionRequest);

    var requestedPositions = [];

    uRepo.findOne(sessionId, {relations: ['position']}).then( async (user) => {

        for(var i=0; i<user.position.length; i++){
            let temp = await rRepo.find({where: {positionId:user.position[i].description
                   , isRejected:'false'},relations:["positionId","user"]});
            requestedPositions.push(temp);
        }
        res.send(requestedPositions);
    });
}

function disapproveRequest(req, res){

    const uRepo = typeorm.getRepository(PositionRequest);
    var data = req.body.data.split('_');

    uRepo.findOne({where:{user: data[0],positionId: data[1]}, relations: ["positionId","user"]})
        .then( async (requestedPos) => {

            requestedPos.isRejected = true;
            uRepo.save(requestedPos);
    });
}

function approveRequest(req, res){

}

function sendExam(req, res){


}

function addPosition(req, res) {

    var email = req.session.email;

    let pRepo = typeorm.getRepository(Position);
    let hRepo = typeorm.getRepository(HR_Account);

    var pos = req.body.data;
    hRepo.findOne(email, {relations: ["position"]}).then( async (user) => {

        pRepo.findOne(pos).then(async (position) => {
            if(user.position.indexOf(position) === -1) {
                user.position.push(position);
                hRepo.save(user);
                res.send({'code':400});
            }
            else {
                res.send({'code':200});
            }
        });
    });
}

function viewAllExams(req, res) {


}

module.exports = { addPosition,approveRequest, disapproveRequest, viewAllRequests, viewAllExams, sendExam };
