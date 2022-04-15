const express = require('express');
const cors = require('cors');
const moedas = require('./moedas.json');

const fs = require('fs');

const app = express();//cria o servidor

app.use(cors()); //libera o cors e tem que ser usado depois do expres()
//o cors vai estar substituindo o res.setHeader('Access-Control-Allow-Origin', '*');

app.get('/', (req, res) => {
    const paginaHtml = fs.readFileSync('contato.html', 'utf8');
    res.send(paginaHtml);
})

app.get('/moedas', (req, res) => {
    // res.send(JSON.stringify(moedas)); 
    //ou se preferir pode fazer apenas
    res.json(moedas)
    //então o res.json() é a mesma coisa que o res.send(JSON.stringify(moedas));
})


app.listen(4000, ()=>console.log('servidor rodando na porta 4000')); //execulta o servidor