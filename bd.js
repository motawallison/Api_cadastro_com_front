const Sequelize = require('sequelize')

const sequelize = new Sequelize('ecommerce', 'root', 'senha@1', {
    host: "localhost",
    dialect: 'mysql'

});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}