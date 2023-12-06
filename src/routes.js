const express = require('express');
const routes = express.Router();
const {} = require('./')

routes.get('/user', calcularIdade )

module.exports = routes