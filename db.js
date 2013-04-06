var mongo = require("mongoskin");
/*
user = "admin";
password = "pwvRIzrSLX5C";
host = "127.0.0.1";
port = 27018;
database = "sharednotes";
*/
//url = "mongodb://"+user+":"+password+"@"+host+":"+port+"/"+database;
url = "mongodb://localhost/test";
exports.db = mongo.db(url);