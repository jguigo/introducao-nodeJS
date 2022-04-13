const http = require('http');
const url = require('url');

const estados = require('./estados.json');


const app = http.createServer((req, res) =>{
    const pathname = url.parse(req.url, true).pathname;

    if(pathname == '/home') {
    const estadosJson = JSON.stringify(estados);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Contenty-Type', 'application/json');
    res.write(estadosJson);
    res.end();
    }
});

app.listen(8000, ()=>console.log('servidor ON na porta 8000'));
