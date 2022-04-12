// Incluindo uma biblioteca
const http = require('http');                //aqui é onde eu trago a funcionalidade de servidor pra mim
const url = require('url');                  //ou seja, esse comando fala pra o node buscar esse pacote e deixar a funções dele
const queryString = require('query-string'); //disponível para mim!

//Definição de endereço / URL
const hostname = '127.0.0.1'; //esse é o IP do localhost
const port = 3000; //O que seria essa porta??!!


//esse bloco é onde as coisas realmente acontecem! onde ficam as regras de negócio! Implementação da regra de negócio
const server = http.createServer((req, res) => {

    //pegar a pergunta na url
    const params = queryString.parse(url.parse(req.url, true).search);
    console.log(req.url);
    //verificar a pergunta e escolher uma respota
    let resposta;
    if(params.pergunta == 'melhor-filme'){
        resposta = 'batman escutando nirvana na bad';
    }
    else if(params.pergunta == 'melhor-tecnologia-backend'){
        resposta = 'node.js';
    }
    else resposta = 'so conheco o melhor!';

    //retorna a respota escolhida

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(resposta);
});


//esse bloco é onde sobe o servidor! Execução!
server.listen(port, hostname, ()=>{
    console.log(`server running at http://${hostname}:${port}/`);
});