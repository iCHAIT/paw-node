var server = require('http');

server.createServer(engine).listen(1337);

function engine(request, repsonse) {

	// repsonse.writeHead(200, {'Content-Type': 'text/plain', 'katte': 'lele'});
	// repsonse.end('Hey there, from the SERVER.');
	console.log('RESPONSE');
	console.log(repsonse);
	console.log('REQUEST');
	console.log(request);

}

