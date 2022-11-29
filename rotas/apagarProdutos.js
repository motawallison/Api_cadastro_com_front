const bd = require("../bd");
const express = require('express');
const cadProdutos = require("../models/cadProdutos");
const router = express.Router();

router.post('/:id', function(req, res) {
    cadProdutos.destroy({where: {
        'id': req.params.id
    }}).then(function() {
        res.redirect('/')
    }).catch(function(erro){
        res.send(`Houve um erro ${erro}`)
    })
})

module.exports = router;