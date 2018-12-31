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

    const user = new User();
    user.email = req.body.email;
    user.password = req.body.password;

    connection.createConnection().then(async (connection) =>{

        var result = new User();
        result = await connection.manager.findOne(User, user);

        if(result !== undefined){
            res.send({'message' : 'this account already exist !!'});
        }else{
            await connection.manager.save(user);
            res.redirect('/');
        }
        connection.close();
    }).catch(error => console.log('error', error));

}

module.exports = { login, register };
