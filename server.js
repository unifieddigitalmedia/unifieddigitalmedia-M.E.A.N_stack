'use strict';

/*
var cl = console.log;
console.log = function(){
  console.trace();
  cl.apply(console,arguments);
};
*/

// Requires meanio .
var mean = require('meanio');

var cluster = require('cluster');

var deferred = require('q').defer();

var compression = require('compression');

var express = require('express');

var app = express();

app.use(compression());

var port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/'));

app.use(express.static('public'));

app.use(express.static('bower_components'));

app.get('/', function (req, res) {

  res.sendFile(path.join(__dirname + "/index.html"));

});

app.listen(3000, function () {

  console.log('Example app listening on port 3000!');

});

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());



app.post('/api/queryLog/:name:email:subject:message', function (req, res) {

  //res.send('POST request to the homepage');
var name = req.body.email;

var response = {"firstName":name, "lastName":"Doe"} ; 
 
  res.json(response);

});



module.exports = deferred.promise;
