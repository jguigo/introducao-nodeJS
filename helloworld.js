const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
    //a ordem aqui influencia no sentido de que o setHeader tem que vir premeiro que 
    //a mensagem! 
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Eu tenho que rodar no powershell todas as vezes?!\n')
});

server.listen(port, hostname, ()=>{
    console.log(`server running at http://${hostname}:${port}/`);
});


