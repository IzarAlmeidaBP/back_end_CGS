import { Router } from 'express';
import {
  criarCliente,
  listarCliente,
  deletarCliente,
  atualizarCliente,
} from '../services/cliente.js';

const router = Router();

router.get('/cliente', async (req, res) => {
  const listaclientes = await listarCliente();
  res.send(listaclientes);
});

router.post('/cliente', async (req, res) => {
  const cliente = await criarCliente(req.body);
  res.status(201).send(cliente);
});

router.put('/cliente', async (req, res) => {
  const cliente = req.body;
  const updatedCliente = await atualizarCliente(cliente);
  res.send(updatedCliente);
});

router.delete('/cliente', async (req, res) => {
  const clienteId = req.body.id;
  await deletarCliente(clienteId);
  res.send('Cliente deletado com sucesso.');
});

export default router;
