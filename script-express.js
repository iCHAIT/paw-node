var express = require('express');

var app = express();

console.log(__dirname);

app.use('/cssFiles', express.static(__dirname + '/assets'));


app.get('/hello', function(request, response) {

	response.send('Hello World');

});

app.listen(1337, function () {

	console.log('Listening at port 1337.');
});