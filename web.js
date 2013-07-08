var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
var myvalue = new Buffer(25);
 response.send(fs.readFileSync("index.html"),myvalue.toString();
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
