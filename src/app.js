import express from 'express';
import http from 'node:http';
import bodyParser from 'body-parser';
import clienteController from './controllers/cliente.js';
import pkg from 'pg';

const { Pool } = pkg;

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(clienteController);

export const conexao = new Pool({
  user: 'postgres',
  database: 'projetoCGS',
  port: 5432,
  host: 'localhost',
  password: 'admin',
});

server.listen(8080);
