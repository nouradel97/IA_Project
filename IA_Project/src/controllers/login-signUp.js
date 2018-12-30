
var connection = require("typeorm");
const User = require('../entity/User').User;

function login(req, res) {

    var user = new User();
    user.email = req.body.email;
    user.password = req.body.password;

    connection.createConnection().then(async (connection) => {

        var result = new User();
        result = await connection.manager.findOne(User, user);
        console.log('done');

        if(result === undefined){
            res.send({'code':400 ,'success' : 'email and password does not match'});
        }else{
            console.log('exist');
            res.send({'code': 200,'success':'localhost:3000/home'});
        }
        connection.close();
    }).catch(error => console.log('error: ',error));
}

function register(req, res) {

    var user = new User();
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

module.exports = { login, register};
