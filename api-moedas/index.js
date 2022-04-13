const http = require('http');

const listaDeMoedas = require('./moedas.json');

// const localhost = '127.0.0.1';
// const port = 3000;

const app = http.createServer((req, res) => {
    console.log(listaDeMoedas);
    const respostaEmJson = JSON.stringify(listaDeMoedas);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.write(respostaEmJson);
    res.end();
})

app.listen(3000, ()=>console.log('servidor iniciado na porta 3000'))