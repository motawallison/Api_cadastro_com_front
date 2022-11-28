const bd = require("../bd");
const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.render('pedidos.handlebars')
    
})

module.exports = router;