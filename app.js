
/**
 * Module dependencies.
 */

var express = require('express');
var stylus = require('stylus');
var nib = require('nib');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
/*var lessMiddleware = require('less-middleware');*/

var app = express();

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib());
}

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
/*app.use(lessMiddleware(__dirname + '/public'));*/
app.use(stylus.middleware({ 
  	src: __dirname + '/public', 
  	compile: compile
}));
app.use(express.static(__dirname + '/public'));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/videos', routes.videos);
app.get('/video', routes.video);
app.get('/form', routes.form);
app.get('/create/category', routes.ccategory);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
