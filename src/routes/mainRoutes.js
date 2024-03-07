const express = require ('express');
const routes = express.Router();
const path = require('path');

//importar el controlador
const mainControllers = require('../controllers/mainControllers');

//Armando rutas
routes.get('/', mainControllers.index);


module.exports = routes;

