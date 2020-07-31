var sslRedirect = require('heroku-ssl-redirect');
var express = require('express');
var app = express();

// enable ssl redirect
app.use(sslRedirect());

var port_number = app.listen(process.env.PORT || 8080);

app.use(express.static('public'));

console.log('server running!');
