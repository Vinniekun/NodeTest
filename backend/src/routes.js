const { Router } = require('express');

const clientController = require('./controllers/ClientController');
const searchController = require('./controllers/SearchController');

const routes = Router();

//Adicionar clientes
routes.post('/addcliente', clientController.addClient);

//Home
routes.get('/', clientController.index);

//Busca
routes.get('/search', searchController.index);

//Update
routes.put('/update', clientController.update);

//Destroy
routes.delete('/delete', clientController.destroy);


module.exports = routes;