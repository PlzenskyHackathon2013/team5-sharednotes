/**
 * Module dependencies.
 */

var express = require('express')
, routes = require('./routes')
, forms = require('./forms')
, mails = require('./mails')
, models = require('./models')
//  , user = require('./routes/user')
, http = require('http')
, path = require('path')
, resource = require('express-resource');

var app = express();

global.models = models

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
		
// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}
		
app.get('/', routes.index);
// app.get('/users', user.list);
app.resource('task', require('./task'));
		
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));

    //forms routes  ----    ????
    app.post('/login', forms.login); 
    app.post('/registration', forms.registration);
    app.post('/createtask', forms.createTask);


});