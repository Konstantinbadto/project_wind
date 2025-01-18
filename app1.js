const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
const wind = mongoose.model('Wind', { name: String }) ;
const winds = new wind({ name: 'Бриз' });
winds.save().then(() => console.log('имеется'));