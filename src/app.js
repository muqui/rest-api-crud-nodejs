const express = require('express');
const config = require('./config');
const morgan = require('morgan');

const clientes = require('./modulos/clientes/rutas');
const  error  = require('./red/errors');

const app = express();


//Middleware
app.use(morgan('dev'));
//app.use(express.json);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Configuracion
app.set('port', config.app.port);

// Rutas
app.use('/api/clientes', clientes)
app.use(error);
module.exports = app;