const bd = require("../bd");
const express = require('express');
const router = express.Router();

router.get('/:id', (req,res)=> {
    res.render('editarProdutos.handlebars')
})

module.exports = router;