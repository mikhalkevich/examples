//задача данного экшна обратиться к модели Maintexts, которая нас связывает с коолекцией Maintext базы данных MongoDB и передать в шаблон полученное значения
exports.index = function(req, res){
    if(req.params.id){
        var indx = req.params.id;
    }else{
        var indx = 'index';
    }
    var Maintexts = require('../models/maintexts').Maintexts;
        Maintexts.findOne({'url':indx}, function(err, ttext){
           if(!ttext){
               ttext = {
                   name:'Добро пожаловать на сайт',
                   body:'Извините, страница не найдена'
               }
           }
   res.render('index', {
                ttext: ttext,
   });
  });
};
