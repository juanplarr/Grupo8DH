const express = require ('express');
const routes = express.Router();
const path = require('path');

//importar el controlador
const mainControllers = require('../controllers/mainControllers');

//Armando rutas
routes.get('/', mainControllers.index);
routes.get('/aritos', mainControllers.aritos);
routes.get('/bandoleras', mainControllers.bandoleras);
routes.get('/carteras', mainControllers.carteras);
routes.get('/cinturones', mainControllers.cinturones);
routes.get('/colgantes', mainControllers.colgantes);
routes.get('/gorras', mainControllers.gorras);


module.exports = routes;

