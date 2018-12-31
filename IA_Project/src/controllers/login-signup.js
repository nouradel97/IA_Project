const typeorm = require("typeorm");
const User = require('../entity/User').User;
var path = require('path');

function login(req, res) {

    const uRepo = typeorm.getRepository(User);
    uRepo.findOne(req.body.email).then( async (user) => {
        if (user === undefined) {
            res.send({'code': 400, 'success': 'email and password does not match'});
        } else {
            res.send({'code': 200, 'success': '/home'});
        }
    })

}

function register(req, res) {

    const uRepo = typeorm.getRepository(User);
    uRepo.findOne(req.body.email).then( async (user) => {
        if(user === undefined) {
            const user = new User();
            user.email = req.body.email;
            user.password = req.body.password;

            uRepo.save(user);
            res.redirect('/');

        } else {
            res.send({'message' : 'this account already exist !!'});
        }
    });

}

module.exports = { login, register };
