var HR_Account = require("../entity/HR_Account").HR_Account;
var PositionRequest = require("../entity/PositionRequest").PositionRequest;
var Position =  require("../entity/Position").Position;
const typeorm = require("typeorm");
const User = require('../entity/User').User;

async function getAllHrPositions(req,res){

    var user = await typeorm.getRepository(User).findOne(req.session.email);
    var requested;
    var temp = [];

    typeorm.getRepository(HR_Account).find({relations: ["position"]}).then(async (hrs) =>{
        typeorm.getRepository(PositionRequest).find({where:{user: user},relations: ["positionId"]})
            .then(async (requestedPos) =>{

                for(var i = 0; i< hrs.length; i++){

                    temp = [];
                    for(var j = 0; j< hrs[i].position.length; j++){

                        requested = false;
                        for(var k = 0; k< requestedPos.length; k++){

                            if(requestedPos[k].positionId.description === hrs[i].position[j].description &&
                            !requestedPos[k].isRejected){
                                requested = true;
                                break;
                            }
                        }
                        if(!requested) {
                            temp.push(hrs[i].position[j]);

                        }
                    }
                    hrs[i].position = temp;
                }
                res.send(hrs);
            });
    });
}

function getAllPositions(req,res){

    typeorm.getRepository(Position).find().then(async (positions) => {
        res.send(positions);
    })
}

async function getAllUserPositions(req, res) {

    const rRepo = typeorm.getRepository(Position);
    const repo = typeorm.getRepository(PositionRequest);
    const uRepo = typeorm.getRepository(User);

    var result = [];
    var requested;

    //var user = await uRepo.findOne(req.session.email);
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

/*function getPositionHr(req, res) {

    const uRepo = typeorm.getRepository(User);
    uRepo.findOne(req.body.id).then(async (hr) => {
        res.send(hr);
    });
}*/

module.exports = { getAllUserPositions, getAllPositions, getAllHrPositions};