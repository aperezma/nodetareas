var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Test number 1' });
});
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Test number 1' });
});
module.exports = router;
