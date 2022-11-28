const app = require('./app');
const port = 3001;

//criando porta
app.listen(port, function() {

    console.log('Servidor rodando na url: http://localhost:'+port)

});