var HR_Account = require("../entity/HR_Account").HR_Account;
var Candidate =  require("../entity/Candidate").Candidate;

const typeorm = require("typeorm");
const User = require('../entity/User').User;
var path = require('path');

function login(req, res) {

    const uRepo = typeorm.getRepository(User);
    uRepo.findOne(req.body.email).then( async (user) => {

        if (user === undefined) {
            res.send({'code': 400, 'success': 'email and password does not match'});
        } else {
            req.session.email = user.email;
            if(user.type === 'Candidate')
                res.send({'code': 200, 'success': '/home'});
            else
                res.send({'code': 200, 'success': '/hr-home'});
        }
    })
}

function register(req, res) {

    const uRepo = typeorm.getRepository(User);

    uRepo.findOne(req.body.email).then( async (user) => {

        if(user === undefined) {

            var user;
            if(req.body.type === 'Candidate'){
                user = new Candidate();
            }else
                user = new HR_Account();

            user.email = req.body.email;
            user.password = req.body.password;
            user.firstName = req.body.firstName;
            user.lastName = req.body.lastName;
            user.age = parseInt(req.body.age);
            user.cv = req.body.cv;
            user.type = req.body.type;

            uRepo.save(user);
            res.send({'code': 200, 'success': '/'});

        } else {
            res.send({'message' : 'this account already exist !!'});
        }
    });

}

module.exports = { login, register };
