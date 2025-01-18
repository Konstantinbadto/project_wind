const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
var schema = mongoose.Schema({ name: String })
schema.methods.veter = function(){
console.log(this.name + " подул")
}
const wind = mongoose.model('Wind', schema);
const winds = new wind({ name: 'Перун' });
winds.save().then(() => winds.veter());
