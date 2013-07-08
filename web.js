var express = require('express');

var app = express.createServer(express.logger());

var myvalue = '';
fs.readFile("index.html", "utf-8", function(error, data){
myvalue = data;
});


app.get('/', function(request, response) {
 response.write(myvalue);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
