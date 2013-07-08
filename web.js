var express = require('express');

var app = express.createServer(express.logger());

var myvalue = '';
fs.readFile("index.html", "utf-8", functioin(error, data){
myvalue = data;
});


app.get('/', function(request, response) {
  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
