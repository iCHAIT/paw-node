var express = require('express')
var path = require('path')
var app = express();


app.use('/cssFiles', express.static(__dirname + '/assets'))

app.get('/', function(req, resp) {

	resp.sendFile('index.html', {root: path.join(__dirname, './files')});

});

app.listen(1337, function() {

console.log('Listening to 1337');
});
