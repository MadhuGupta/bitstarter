var express = require('express');
var fs =require('fs');
var app = express.createServer(express.logger());

var content = fs.readFileSync('index.html');


app.get('/', function(request, response) {


  response.send(content.toString("utf8"));

});


var port = process.env.PORT || 8080;
app.use(express.static(__dirname + '/assets'));
app.listen(port, function() {
  console.log("Listening on " + port);
});
