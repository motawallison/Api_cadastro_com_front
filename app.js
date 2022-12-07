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

//importando as rotas
const rotaHome = require('./rotas/home')
const rotaProdutos = require('./rotas/produtos');
const rotaAddProdutos = require('./rotas/addProdutos')
const rotaPedidos = require('./rotas/pedidos');
const rotaApagarProdutos = require('./rotas/apagarProdutos')
const rotaEdicao = require('./rotas/edicao')
const rotaEditarProdutos = require('./rotas/editarProdutos')


//estabelecendo uso das rotas
app.use('/produtos', rotaProdutos)
app.use('/pedidos', rotaPedidos)
app.use('/', rotaHome)
app.use('/addProdutos', rotaAddProdutos)
app.use('/apagarProdutos', rotaApagarProdutos)
app.use('/edicao', rotaEdicao)
app.use('/editarProdutos', rotaEditarProdutos)

module.exports = app;





