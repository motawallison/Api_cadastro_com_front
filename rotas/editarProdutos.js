const bd = require("../bd");
const express = require('express');
const cadProdutos = require("../models/cadProdutos");
const router = express.Router();


router.put('/', (req, res) => {
    cadProdutos.update(
        {nome: req.body.nome,
        preco: req.body.preco},
        {where: {id: req.params.id}}
    ).then(() => {
        res.send('Sucesso!')}).catch(function(erro){
        res.send(`Erro ${erro}`)
   })
})

module.exports = router;
