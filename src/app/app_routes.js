var express = require('express');
var router  = express.Router();

var index = require('./routes/index')
router.get('/', index);

module.exports = app;
