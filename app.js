var express = require('express');
var path    = require('path');
var logger  = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');

var appRoutes = require('./src/app/appRoutes');
var apiRoutes = require('./src/api/apiRoutes')
const app = express();

app.set('views', path.join(__dirname,'src/app/views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'src/app/public')));

app.use('/', appRoutes);
app.use('/api/v1',apiRoutes);

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
