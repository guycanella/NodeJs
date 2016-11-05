
var http	=	require('http');
var fs		=	require('fs');

// constante __dirname retorna o diretório raiz
// da aplicação

var server	=	http.createServer(function(request,response){
	fs.readFile(__dirname + '/index.html',function(erro,html){
		response.writeHeader(200,{'Content-Type':'text/html'});
		response.write(html);
		response.end();
	});
});

server.listen(3000,function(){
	console.log('Executing HTML file');
});
