var mongo = require("mongojs");

collections = ["users", "commons", "tasks"];
//url = "mongodb://"+user+":"+password+"@"+host+":"+port+"/"+database;
url = "mongodb://localhost:27017/test";
exports.db = new mongo.connect(url, collections);
