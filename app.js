var express = require('express');
var path    = require('path');
var logger  = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');

var routes = require('./src/routes');
const app = express();

app.set('view', path.join(__dirname,'views'));
app.set('veiw engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(___dirname, 'public')));

app.use('/', routes)