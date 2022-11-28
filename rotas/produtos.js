const bd = require("../bd");
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('produtos.handlebars')
})

module.exports = router;