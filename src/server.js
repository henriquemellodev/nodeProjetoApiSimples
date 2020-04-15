'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const port = 3003;
const app = express();
const dataBase = require('./database');

app.use(bodyParser.urlencoded({extend: true}));

app.get('/produtos', (req, res, next) => {
    res.send(dataBase.getProducts());
});

app.get('/produtos/:id', (req, res, next) => {
    res.send(dataBase.getProduct(req.params.id));
});

app.post('/produtos', (req, res, next) => {
    const product = dataBase.saveProduct({
        nome: req.body.nome,
        preco: req.body.preco
    });
    res.send(product);
});

app.put('/produtos/:id', (req, res, next) => {
    const product = dataBase.saveProduct({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    });
    res.send(product);
});

app.delete('/produtos/:id', (req, res, next) => {
    const product = dataBase.deleteProduct(req.params.id);
    res.send(product);
});

app.listen(port, () => {
    console.log(`Executando na porta ${port}`);
});