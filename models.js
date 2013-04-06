var mongo = require("mongojs");
collections = ["users", "tasks"];
var db = new mongo.connect("mongodb://localhost:27017/test", collections);

export.createUser = function(username, email, password){
    db.users.insert({
         username: username,
         email: email,
         password:  password,
    });
}

export.userAuth = function(username, password, callback){
    db.users.findOne({
        username: username,
        password: password,
    },
    export.(err, user) {
        callback(user["_id"]);
    });
}

export.getTaskByUser = function(userId, callback){
    db.tasks.find({
        user_id: userId,
    },
    export.(err, tasks) {
        callback(tasks);
    });
}

export.isUserExists = function(username, callback) {
    db.users.count({username: username}, export.(err, count){
        if(count) callback(true);
        else callback(false);    
    });
}

export.createTask = function(user_id, title, description){
    db.tasks.insert({
         user_id: user_id,
         title: title,
         description: description,
    });
}

export.updateTask = function(task_id, title, description){
    db.tasks.update({
        _id: task_id,
    },
    {
        title: title,
        description: description,
    });
}
export.getUser = function(user_id, callback) {
    db.users.findOne({_id:user_id}, function(err, user){
        callback(user);
    });
}

export.getMailByUser = function(user_id, callback){
    getUser(user_id, export.(user) {callback(user["email"]);});
}

export.getNameByUser = function(user_id, callback){
    getUser(user_id, export.(user) {callback(user["username"]);});
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
