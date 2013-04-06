var mongo = require("mongojs");
collections = ["users", "tasks"];
var db = new mongo.connect("mongodb://localhost:27017/test", collections);

function createUser(username, email, password){
    db.users.insert({
         username: username,
         email: email,
         password:  password,
    });
}

function userAuth(username, password, callback){
    db.users.findOne({
        username: username,
        password: password,
    },
    function (err, user) {
        callback(user["_id"]);
    });
}

function getTaskByUser(userId, callback){
    db.tasks.find({
        user_id: userId,
    },
    function (err, tasks) {
        callback(tasks);
    });
}

function isUserExists(username, callback) {
    db.users.count({username: username}, function (err, count){
        if(count) callback(true);
        else callback(false);    
    });
}

function createTask(user_id, title, description){
    db.tasks.insert({
         user_id: user_id,
         title: title,
         description: description,
    });
}

function updateTask(task_id, title, description){
    db.tasks.update({
        _id: task_id,
    },
    {
        title: title,
        description: description,
    });
}
function getUser(user_id, callback) {
    db.users.findOne({_id:user_id}, function(err, user){
        callback(user);
    });
}

function getMailByUser(user_id, callback){
    getUser(user_id, function (user) {callback(user["email"]);});
}

function getNameByUser(user_id, callback){
    getUser(user_id, function (user) {callback(user["username"]);});
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
