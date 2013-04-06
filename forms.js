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
        if ((userExits)) {
            
            if (global.models.createUser(login, mail, passHash(pass))) {
                res.send('user created')
            }
            else {
                res.send('some error')
            }
        }
        else {
            res.send('username is allready used, pls select other login');
        }
    }); 
}     

exports.createTask = function (req, res) {
    var name = req.param('name', null);
    var desc = req.param('desc', null);
    
    if (global.models.createTask(global.userId, name, desc)) {
        res.send('task created')
    }
    else {
        res.send('some error')
    }
}

function passHash(pass) {
    var crypto = require('crypto')
    return hash = crypto.createHash('md5').update(pass+"RANDOM_SALT").digest("hex");
}