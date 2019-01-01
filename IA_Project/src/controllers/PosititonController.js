var PositionRequest = require("../entity/PositionRequest").PositionRequest;
var Position =  require("../entity/Position").Position;
const typeorm = require("typeorm");
const User = require('../entity/User').User;

async function getAllPositions(req, res) {

    const rRepo = typeorm.getRepository(Position);
    const repo = typeorm.getRepository(PositionRequest);
    const uRepo = typeorm.getRepository(User);

    var result = [];
    var requested;

    var user = await uRepo.findOne(req.session.email);
    var allPositions = await rRepo.find({relations: ["hr"]});


    var requestedPos = await repo.createQueryBuilder('requestedPos')
        .innerJoinAndSelect('requestedPos.positionId', 'positionId').getMany();

    for(var i in allPositions){

        requested = false;
        for (var j in requestedPos){

            if(requestedPos[j].positionId.id === allPositions[i].id){
                requested = true;
                break;
            }
        }
        if(!requested)
            result.push(allPositions[i]);
    }
    res.send(result);
}

function getPositionHr(req, res) {

    const uRepo = typeorm.getRepository(User);
    uRepo.findOne(req.body.id).then(async (hr) => {
        res.send(hr);
    });
}

module.exports = { getAllPositions, getPositionHr};