import { Router } from 'express';
import { criarCliente, listarCliente } from '../services/cliente.js';

const router = Router();

router.get('/cliente', async (req, res) => {
  const listaclientes = await listarCliente();
  res.send(listaclientes);
});

router.post('/cliente', async (req, res) => {
  const cliente = await criarCliente(req.body);
  res.status(201).send(cliente);
});

router.delete('/cliente', (req, res) => {
  res.send('DELETE CLIENTE');
});
export default router;
