// The app routes.
// Define all app routes here.
// Maybe for app (web pages), use react-router instead.

var express = require('express');
var router  = express.Router();

router.get('/', require('./routes/index'));

module.exports = router;
