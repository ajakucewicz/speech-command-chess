var express = require('express');
var app = express();

var port = app.listen(8080);

app.enable('trust proxy');


app.use(express.static('public'));

console.log('server running!');