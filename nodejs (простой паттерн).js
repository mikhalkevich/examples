http = require('http');
file = require('fs');
var server = http.createServer(function(req,res){
 getData(res);
}).listen(3000);
// функция getData извлекает данные и передает выполнение кода функции getTemp (если ошибок нет) или функции allError (если ошибки есть)
function getData(res){
 file.readFile('datas.json', function(err, data){
   if(err){
     allError(err, res);
   }else{
    getTemp(JSON.parse(data.toString()), res)
   }
 });
}
// функция getTemp получив данные загружает шаблон и передает управление кодом функции formatHtml.
function getTemp(titles, res){
  file.readFile('temp.html', function(err, data){
    if(err){
      allError(err, res);
    }else{
      formatHtml(titles, data.toString(), res);
    }
  });
}
// функция formatHtml получив данные и шаблон, передает ответ клиенту.
function formatHtml(titles, tmp, res){
 // в файле шаблона находим символы $$, заменяем их на данные из JSON-файла.
 var htmldata = tmp.replace('$$', titles);
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.end(htmldata);
}
function allError(err, res){
  console.log(err);
  res.end('server error')
}
