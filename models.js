var db = require("./db").db;

exports.createUser = function(username, email, password){
    db.users.insert({
         username: username,
         email: email,
         password:  password,
    });
}

exports.userAuth = function(username, password, callback){
    db.users.findOne({
        username: username,
        password: password,
    },
   function (err, user) {
        callback(user["_id"]);
    });
}

exports.getTaskByUser = function(userId, callback){
    db.tasks.find({
        user_id: userId,
    },
   function (err, tasks) {
        callback(tasks);
    });
}

exports.isUserExists = function(username, callback) {
    db.users.count({username: username},function (err, count){
        if(count) callback(true);
        else callback(false);    
    });
}

exports.createTask = function(user_id, title, description){
    db.tasks.insert({
         user_id: user_id,
         title: title,
         description: description,
    });
}

exports.updateTask = function(task_id, title, description){
    db.tasks.update({
        _id: task_id,
    },
    {
        title: title,
        description: description,
    });
}
exports.getUser = function(user_id, callback) {
    db.users.findOne({_id:user_id}, function(err, user){
        callback(user);
    });
}

exports.getMailByUser = function(user_id, callback){
    getUser(user_id,function (user) {callback(user["email"]);});
}

exports.getNameByUser = function(user_id, callback){
    getUser(user_id,function (user) {callback(user["username"]);});
}

if (require.main === module){
    userAuth("test", "test", function(id){
    getTaskByUser(id, function(tasks){
    console.log(tasks);
    getMailByUser(id, console.log);
    });
    });
    isUserExists("test", console.log);
}
