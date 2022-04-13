const http = require('http');
const url = require('url');
const queryString = require('query-string');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {

    let urlparse = url.parse(req.url, true);
    let resposta;

    // receber informações
    const params = queryString.parse(urlparse.search);    
    
// Criar um usuário + Atualizar um usuário
    if(urlparse.pathname == '/criar-atualizar-usuario'){
        // salvar as informações
            fs.writeFile(`./users/${params.id}.txt`, JSON.stringify(params), function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
            
            resposta = 'Usuario cadastrado com sucesso!';
            
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end(resposta);
    }
    
    // Selecionar um usuário
    if(urlparse.pathname == '/selecionar-usuario'){
        fs.readFile(`./users/${params.id}.txt`, function(err, data){
            resposta = data;

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(resposta);
        });
    }
    


    // Remover o usuário
    if(urlparse.pathname == '/remover-usuario'){
        fs.unlink(`./users/${params.id}.txt`, function (err) {
            console.log('File deleted!');

            resposta = err ? 'Usuario nao encontrado' : 'Usuario removido!';

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(resposta);
          });
    }


});

server.listen(port, hostname, ()=>{
    console.log(`server running at http://${hostname}:${port}/`);
});


// http://localhost:3000/selecionar-usuario?nome=Larissa&idade=26&id=1