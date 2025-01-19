
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  req.session.greeting = "Hi!!!";
  res.render('index', { title: 'Express',
  counter:req.session.counter });
  });
  
router.get('/logreg', function(req, res, next) {
    res.render('logreg', { title: 'Логин и регистрация', nav: res.locals.nav });
});

module.exports = router;
