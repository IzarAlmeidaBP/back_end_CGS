import express from 'express';
import http from 'node:http';
import clienteController from './controllers/cliente.js';
5;
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

const server = http.createServer(app);

app.use(clienteController);

server.listen(8080);
