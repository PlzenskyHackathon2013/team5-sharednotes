var mongo = require("mongojs");

user = "admin";
password = "pwvRIzrSLX5C";
host = "127.0.0.1";
port = 27018;
database = "sharednotes";

collections = ["users", "commons", "tasks"];
url = "mongodb://"+user+":"+password+"@"+host+":"+port+"/"+database;
exports.db = new mongo.connect(url, collections);
