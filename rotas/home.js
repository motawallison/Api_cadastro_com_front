const bd = require("../bd");
const express = require('express');
const cadProdutos = require("../models/cadProdutos");
const router = express.Router();


router.get('/', (req, res) => {
    cadProdutos.findAll().then(function(produtos){
        res.render('home.handlebars', {produtos: produtos})
    })
})

module.exports = router;