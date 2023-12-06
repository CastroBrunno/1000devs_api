const express = require('express');
const server = express();
const routes = require('./src/routes')
const port = 3007

server.use('/', routes)

server.listen(port, function () {
    console.log(`aplicação ouvindo na porta ${port}`);
});