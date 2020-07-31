var express = require('express');
var app = express();

var port_number = app.listen(process.env.PORT || 8080);

//app.enable('trust proxy');

app.use(express.static('public'));

console.log('server running!');



app.listen(port_number);
