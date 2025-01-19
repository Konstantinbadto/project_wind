var express = require('express');
var router = express.Router();
var Wind = require('../models/wind').Wind;
var express = require('express');
var router = express.Router();
var Wind = require('../models/wind').Wind;
var checkAuth = require("../middlewares/checkAuth.js");

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('Новый маршрутизатор, для маршрутов, начинающихся с winds');
});  

router.get("/:nick",checkAuth, async function (req, res, next) {
    var winds = await Wind.find({ nick: req.params.nick });
    console.log(winds)
    if (!winds.length) return next(new Error("Нет такого ветра"))
    var wind = winds[0];
    res.render('wind', {
        title: wind.title,
        picture: wind.avatar,
        desc: wind.desc
    })
});

module.exports = router;