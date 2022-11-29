const bd = require("../bd");
const express = require('express');
const cadProdutos = require("../models/cadProdutos");
const router = express.Router();

router.post('/', function(req, res){
    cadProdutos.create({
        nome: req.body.nome,
        preco: req.body.preco

    }).then(function(){
        res.render('prodCadastrado.handlebars')
    }).catch(function(erro){
        res.send(`ERRO: Produto não cadastrado ${erro}`)
    })

})

module.exports = router;