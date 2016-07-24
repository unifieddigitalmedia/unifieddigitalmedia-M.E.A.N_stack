'use strict';

/*
var cl = console.log;
console.log = function(){
  console.trace();
  cl.apply(console,arguments);
};
*/

// Requires meanio .

process.env.NODE_CONFIG_DIR = './config/env';

var mean = require('meanio');

var cluster = require('cluster');

var deferred = require('q').defer();

var compression = require('compression');

var express = require('express');

var app = express();

app.use(compression());

app.use('/', express.static(__dirname + '/'));

app.use(express.static('public'));

app.use(express.static('bower_components'));

app.get('/', function (req, res) {

  res.sendFile(path.join(__dirname + "/index.html"));

});

app.listen(process.env.PORT || 5000, function () {

  console.log('Example app listening on port 5000!');

});


var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());



var mandrill = require('node-mandrill')(process.env.MANDRILL_API);

app.post('/api/queryLog/:name:email:subject:message', function (req, res) {

var name = req.body.email;


  mandrill('/messages/send', {

    message: {
        to: [{email: 'udigitallondon@hotmail.com', name: 'Jim Rubenstein'}],
        from_email: 'you@domain.com',
        subject: "Hey, what's up?",
        text: "Hello, I sent this message using mandrill."
    }

}, function(error, response)

{
    //uh oh, there was an error
    if (error) console.log( JSON.stringify(error) );

    
    else console.log(response);

var response = {"firstName":name, "lastName":"Doe"} ; 
 
  res.json(response);

});


});


});



module.exports = deferred.promise;
