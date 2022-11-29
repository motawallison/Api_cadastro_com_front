//exportando modulos
const handlebars = require('express-handlebars');
const express = require('express');
const app = express();


//Template
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handelbars');

//style
app.use(express.static('public'))

//Body-Parser
app.use(express.urlencoded({extended: false }));
app.use(express.json());

//exportando as rotas
const rotaProdutos = require('./rotas/produtos');
const rotaPedidos = require('./rotas/pedidos');
const rotaHome = require('./rotas/home')
const rotaaddProdutos = require('./rotas/addProdutos')


//estabelecendo uso das rotas
app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);
app.use('/', rotaHome)
app.use('/addProdutos', rotaaddProdutos)



module.exports = app;