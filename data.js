var data = [{
    title: 'Муссон',
    nick: 'musson',
    avatar: '/images/musson.png',
    desc: 'Муссон — это ветер, который меняет своё направление два раза в год: летом он дует с моря на сушу, зимой — с суши на море.'
    },
    {
    title: 'Мистраль',
    nick: 'mistral',
    avatar: '/images/mistral.png',
    desc: 'Мистраль — холодный северо-западный ветер, дующий во Франции с гор Севенны и юго-западных отрогов Альп в долину Роны и на средиземноморское побережье. Наблюдается во все времена года, но чаще зимой.'
    },
    {
    title: 'Сандаунер',
    nick: 'sundowner',
    avatar: '/images/sundowner.png',
    desc: 'андаунер — это северный морской ветер в Калифорнии вдоль южного тихоокеанского склона гор Санта-Инес, в населённых пунктах вдоль побережья Гавиота и Санта-Барбара в направлении округа Вентура, но не включая его'
    }
    ];
    module.exports.data = data;
    router.get("/:nick", async function(req, res, next) {
        var winds = await Wind.find({nick: req.params.nick});
        console.log(winds)
        if(!winds.length) return next(new Error("Нет такого ветра "))
        var wind = winds[0];
        res.render('wind', {
        title: wind.title,
        picture: wind.avatar,
        desc: wind.desc
        })
        });