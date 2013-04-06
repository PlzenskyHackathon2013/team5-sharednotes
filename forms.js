exports.login = function(req, res){
    var pass = req.param('pass', null);
    var login = req.param('login', null);          
     
    global.models.userAuth(login, passHash(pass), function(userId){
        req.session.userId = userId;
     
        console.log(userId);
        if (userId) {
            //ok
            res.send('login ok. user id is' + userId);
        }
        else {
            //not ok
            res.send('login failed');
        }
    });
};

exports.registration = function(req, res){
    var pass = req.param('pass', null);
    var login = req.param('login', null);
    var email = req.param('email', null);         
     
    global.models.isUserExists(login, function (userExits) {
        console.log(userExits)
        if (!userExits) {
            global.models.createUser(login, email, passHash(pass));
            res.send('user created')
        }
        else {
            res.send('username is allready used, pls select other login');
        }
    }); 
}     

exports.createTask = function (req, res) {
    var name = req.param('name', null);
    var desc = req.param('desc', null);
    
    global.models.createTask(req.session.userId, name, desc)
    res.send('task created')
}

function passHash(pass) {
    var crypto = require('crypto')
    return hash = crypto.createHash('md5').update(pass+"RANDOM_SALT").digest("hex");
}