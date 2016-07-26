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


var mandrill_client = require('node-mandrill')('fix_HqmjREpZnCAHR_Dhaw');

app.post('/api/queryLog/:name:email:subject:message', function (req, res) {

var name = req.body.email;


var message = {
    "html": "<p>Example HTML content</p>",
    "text": req.body.message,
    "subject": req.body.subject,
    "from_email": "info@unifieddigitalmedia.co.uk",
    "from_name": req.body.name,
    "to": [{
            "email": "udigitallondon@hotmail.com",
            "name": "Recipient Name",
            "type": "to"
        }],
    "headers": {
        "Reply-To": "message.reply@example.com"
    },
    "important": false,
    "track_opens": null,
    "track_clicks": null,
    "auto_text": null,
    "auto_html": null,
    "inline_css": null,
    "url_strip_qs": null,
    "preserve_recipients": null,
    "view_content_link": null,
    "bcc_address": "message.bcc_address@example.com",
    "tracking_domain": null,
    "signing_domain": null,
    "return_path_domain": null,
    "merge": true,
    "merge_language": "mailchimp",
    "global_merge_vars": [{
            "name": "merge1",
            "content": "merge1 content"
        }],
    "merge_vars": [{
            "rcpt": "recipient.email@example.com",
            "vars": [{
                    "name": "merge2",
                    "content": "merge2 content"
                }]
        }],
    "tags": [
        "password-resets"
    ],
    "subaccount": "customer-123",
    "google_analytics_domains": [
        "example.com"
    ],
    "google_analytics_campaign": "message.from_email@example.com",
    "metadata": {
        "website": "www.example.com"
    },
    "recipient_metadata": [{
            "rcpt": "recipient.email@example.com",
            "values": {
                "user_id": 123456
            }
        }],
    "attachments": [{
            "type": "text/plain",
            "name": "myfile.txt",
            "content": "ZXhhbXBsZSBmaWxl"
        }],
    "images": [{
            "type": "image/png",
            "name": "IMAGECID",
            "content": "ZXhhbXBsZSBmaWxl"
        }]
};
var async = false;
var ip_pool = "Main Pool";
var send_at = "2016-07-23 12:01:00";


mandrill_client.messages.send({"message": message}, function(result) {

    console.log(result);

    res.end();
    /*
    [{
            "email": "recipient.email@example.com",
            "status": "sent",
            "reject_reason": "hard-bounce",
            "_id": "abc123abc123abc123abc123abc123"
        }]
    */
}, function(e) {
    // Mandrill returns the error as an object with name and message keys
    console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
    // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
     res.end();
});


});




module.exports = deferred.promise;
