var express = require('express')
var app = express();

app.get('/', function (req, resp) {

	resp.end('Hey There. Server restart');

});

app.listen(1337, function() {

	console.log('Server running at prot 1337');

});