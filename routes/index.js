var express = require('express');
var router = express.Router();

/* GET home page. */
  router.get('/musson', function(req, res, next) {
    res.render( 'wind',{
      title: "Муссон",
      picture: "project_wind1/public/images/mistral.png",
      desc: "Муссон — это ветер, который меняет своё направление два раза в год: летом он дует с моря на сушу, зимой — с суши на море."
    });
  });
  
  router.get('/mistral', function(req, res, next) {
    res.render( 'wind',{
      title: "Мистраль",
      picture: "project_wind1/public/images/mistral.png",
      desc: "Мистраль — холодный северо-западный ветер, дующий во Франции с гор Севенны и юго-западных отрогов Альп в долину Роны и на средиземноморское побережье. Наблюдается во все времена года, но чаще зимой."
    });
  });
  router.get('/sundowner', function(req, res, next) {
    res.render( 'wind',{
      title: "Сандаунер",
      picture: "project_wind1/public/images/sundowner.png",
      desc: "Сандаунер — это северный морской ветер в Калифорнии вдоль южного тихоокеанского склона гор Санта-Инес, в населённых пунктах вдоль побережья Гавиота и Санта-Барбара в направлении округа Вентура, но не включая его."
    });
  });
  
    
module.exports = router;
