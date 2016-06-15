http = require('http');
file = require('fs');
var server = http.createServer(function(req,res){
 getData(res);
}).listen(3000);
// ������� getData ��������� ������ � �������� ���������� ���� ������� getTemp (���� ������ ���) ��� ������� allError (���� ������ ����)
function getData(res){
 file.readFile('datas.json', function(err, data){
   if(err){
     allError(err, res);
   }else{
    getTemp(JSON.parse(data.toString()), res)
   }
 });
}
// ������� getTemp ������� ������ ��������� ������ � �������� ���������� ����� ������� formatHtml.
function getTemp(titles, res){
  file.readFile('temp.html', function(err, data){
    if(err){
      allError(err, res);
    }else{
      formatHtml(titles, data.toString(), res);
    }
  });
}
// ������� formatHtml ������� ������ � ������, �������� ����� �������.
function formatHtml(titles, tmp, res){
 // � ����� ������� ������� ������� $$, �������� �� �� ������ �� JSON-�����.
 var htmldata = tmp.replace('$$', titles);
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.end(htmldata);
}
function allError(err, res){
  console.log(err);
  res.end('server error')
}
