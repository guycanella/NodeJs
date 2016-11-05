
var http	=	require('http');
var fs		=	require('fs');
var url		=	require('url');

// Funções
// Função que retorna o endereço local do arquivo
var directory	=	function(file){
	return __dirname + "/" + file;
};


// Função simples de gerenciamento de rotas
var route	=	function(pathname){
	if(pathname && pathname != "/"){
		var file	=	directory(pathname + ".html");
		var exist	=	fs.existsSync(file);
		if(exist){
			return file;
		}
		return directory("error.html");
	}
	return directory("articles.html");
};

// Iniciando Server
var server	=	http.createServer(function(request,response){
	// Obtendo pathname digitado no browser
	var pathname	=	url.parse(request.url).pathname;

	// Processando roteamento do pathname
	var page	=	route(pathname);

	// Renderizando a página HTML
	fs.readFile(page, function(err,html){
		response.writeHeader(200,{'Content-Type':'text/html'});
		response.end(html);
	});
});

server.listen(3000,function(){
	console.log('Executing challenge');
});
