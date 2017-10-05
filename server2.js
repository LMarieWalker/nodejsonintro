var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
app.use(bodyParser.json({ extended: true }));

app.post('/showname', function(req,res){
  console.log(req.body);

  res.json(req.body.name);
});


app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
