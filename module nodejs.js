//������ ������� ����� ���������� � ������ Maintexts, ������� ��� ��������� � ���������� Maintext ���� ������ MongoDB � �������� � ������ ���������� ��������
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
                   name:'����� ���������� �� ����',
                   body:'��������, �������� �� �������'
               }
           }
   res.render('index', {
                ttext: ttext,
   });
  });
};
