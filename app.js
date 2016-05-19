var express = require('express');
var path    = require('path');
var logger  = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');

// Import our routes for app and api.
var appRoutes = require('./src/app/appRoutes');
var apiRoutes = require('./src/api/apiRoutes');

// get a instance of express.
const app = express();

// Set Web pages location and template engine.
// Here we use pug (jade) for the project.
app.set('views', path.join(__dirname,'src/app/views'));
app.set('view engine', 'pug');

// Added middle-ware for express.
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'src/app/public')));

// Added route to express.
app.use('/', appRoutes);
app.use('/api/v1',apiRoutes);

// Set Express PORT.
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
