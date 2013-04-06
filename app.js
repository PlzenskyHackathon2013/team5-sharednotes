
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , forms = require('./forms')
  , mails = require('./mails')
  //, models = require('models');
  

//set model as global
//global.models = models;

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);

//forms routes  ----    ????
app.post('/login', forms.login); 
app.post('/registration', forms.registration);
app.post('/createtask', forms.createTask);

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
