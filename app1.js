const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
var Wind = require('./models/wind.js').Wind
var wind = new Wind({
title: "Зефир",
nick: "zefir",
})

wind.save();
