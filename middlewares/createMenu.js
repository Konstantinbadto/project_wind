var Wind = require("../models/wind").Wind
module.exports = async function(req,res,next){
res.locals.nav = []
 var menu = await Wind.find(null,{_id:0,title:1,nick:1}); //  Удаляем эту строку
 console.log(menu);
 if (menu.length != 0) {
 res.locals.nav = menu;
 }
next();
}
