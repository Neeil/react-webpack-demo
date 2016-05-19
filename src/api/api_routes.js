
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();


// var duorouController = require('./api/duorou.js');

// // Duorou
// router.get('/duorous', duorouController.index);
// router.post('/duorous', jsonParser, duorouController.create);
// router.get('/duorous/:id', duorouController.single);
// router.put('/duorous/:id', jsonParser, duorouController.put);
// router.delete('/duorous/:id', jsonParser, duorouController.delete);


module.exports = router;