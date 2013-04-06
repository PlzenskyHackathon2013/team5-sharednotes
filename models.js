var db = require("./db").db;

exports.createUser = function(username, email, password){
    db.collection("users").insert({
         username: username,
         email: email,
         password:  password,
    });
}

exports.userAuth = function(username, password, callback){
    db.collection("users").findOne({
        username: username,
        password: password,
    }, function (err, user) {
        callback(user["_id"]);
    });
}

exports.getTaskByUser = function(userId, callback){
    db.collection("tasks").find({
        user_id: userId,
    }).toArray(function (err, tasks) {
        callback(tasks);
    });
}

exports.isUserExists = function(username, callback) {
    db.collection("users").count({username: username},function (err, count){
        if(count) callback(true);
        else callback(false);    
    });
}

exports.createTask = function(user_id, title, description){
    db.collection("tasks").insert({
         user_id: user_id,
         title: title,
         description: description,
    });
}

exports.updateTask = function(task_id, title, description){
    db.collection("tasks").update({
        _id: task_id,
    },
    {
        title: title,
        description: description,
    });
}
exports.getUser = function(user_id, callback) {
    db.collection("users").findOne({_id:user_id}, function(err, user){
        callback(user);
    });
}

exports.getMailByUser = function(user_id, callback){
    getUser(user_id,function (user) {callback(user["email"]);});
}

exports.getNameByUser = function(user_id, callback){
    getUser(user_id,function (user) {callback(user["username"]);});
}