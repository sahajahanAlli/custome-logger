var express = require('express');
const logger=require('../logger/logger')
var router = express.Router();

//create logger object
const log=new logger('app:1')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Logger Demo' });
});

//on form submit
router.post('/login', function(req, res, next) {
  console.log('Logging info')
  console.log(log.info(new Date+JSON.stringify(req.body)))
  console.log('Logging error')
  console.log(log.error(new Date+JSON.stringify(req.body)))
  console.log('Logging log')
  console.log(log.log(new Date+JSON.stringify(req.body)))
  console.log('Logging verbose')
  console.log(log.verbose(new Date+JSON.stringify(req.headers)+JSON.stringify(req.body)))
  res.render('index', { title: 'Logger Demo' });
});

module.exports = router;
