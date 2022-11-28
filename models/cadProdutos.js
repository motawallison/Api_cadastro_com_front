const bd = require('../bd');

const cadProdutos = bd.sequelize.define('produtos',   {
  
    nome: {
        type: bd.Sequelize.STRING
    },
    preco: {
        type: bd.Sequelize.FLOAT
    }

});

cadProdutos.sync();

module.exports = cadProdutos;