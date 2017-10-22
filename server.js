var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
app.use(bodyParser.json({ extended: true })); // you can accept json - parses to all types of requests

// POST 'NAME', 'LAST', 'AGE'
app.post('/create', function(req,res){
  console.log(req.body); //
  res.sendStatus(200)
});

// TAKE THE AGE FROM ABOVE AND DOUBLE IT
app.post('/addage', function(req, res){
  let doubledAge = req.body.age * 2;
  res.json(doubledAge);
  res.sendStatus(200);
})

app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
