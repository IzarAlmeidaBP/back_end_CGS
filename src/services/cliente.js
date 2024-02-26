import { conexao } from '../app.js';

export const listarCliente = async () => {
  const clientes = conexao.query('select * from clientes');
  return (await clientes).rows;
};

export const criarCliente = async (cliente) => {
  const { nome, email, senha } = cliente;
  const query = 'INSERT INTO clientes (nome, email, senha) VALUES ($1, $2, $3)';
  const values = [nome, email, senha];
  return await conexao.query(query, values);
};

export const deletarCliente = async (clienteId) => {
  await conexao.query('DELETE FROM clientes WHERE id = $1', [clienteId]);
};

export const atualizarCliente = async (cliente) => {
  const { id, nome, email, senha } = cliente;
  const query =
    'UPDATE clientes SET nome = $1, email = $2, senha = $3 WHERE id = $4 RETURNING *';
  const values = [nome, email, senha, id];
  const updatedCliente = await conexao.query(query, values);
  return updatedCliente.rows[0];
};
