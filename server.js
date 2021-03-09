const Ably = require("ably");
const path = require('path');
require('dotenv').config();

const ApiKey = process.env.ABLY_API_KEY; /* Add your API key here */

/* Instance the Ably REST server library */
var rest = new Ably.Rest({ key: ApiKey });

/* Start the Express.js web server */
const express = require('express'),
      app = express(),
      cookieParser = require('cookie-parser');

app.use(cookieParser());

/* Server static content from the root path to keep things simple */
app.use('/', express.static(__dirname));

/* Issue token requests to clients sending a request
   to the /auth endpoint */
app.get('/auth', function (req, res) {
  var tokenParams;
  /* Check if the user is logged in */
    tokenParams = {
      'capability': { '[product:ably-transport/vehicles]*': ['subscribe'] }
    };

  console.log("Sending signed token request:", JSON.stringify(tokenParams));
  rest.auth.createTokenRequest(tokenParams, function(err, tokenRequest) {
    if (err) {
      res.status(500).send('Error requesting token: ' + JSON.stringify(err));
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(tokenRequest));
    }
  });
});

app.get('/',function(req,res){
    console.log(path);
    console.log("BEEP");
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/lines',function(req,res){
    console.log(__dirname+'/lines.html');
    res.sendFile(path.join(__dirname+'/lines.html'));
});

app.listen(3000, function () {
    console.log('Web server listening on port 3000');
});