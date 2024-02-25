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
