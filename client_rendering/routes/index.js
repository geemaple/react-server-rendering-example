var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var jsonStr = JSON.stringify({'name': 'here'}, {indent: true});
  res.render('index', { param: jsonStr });
});

module.exports = router;
