var express = require('express');
var router = express.Router();

/* GET home page. */
  router.get('/musson', function(req, res, next) {
    res.send("<h1>Страница Муссона</h1>")
    });
    router.get('/mistral', function(req, res, next) {
      res.send("<h1>Страница Мистраль</h1>")
      });
    router.get('/sundowner', function(req, res, next) {
      res.send("<h1>Страница Сандаунера</h1>")
      });
    
module.exports = router;
