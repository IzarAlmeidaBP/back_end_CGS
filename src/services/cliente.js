import { conexao } from '../app.js';

export const listarCliente = async () => {
  try {
    const clientes = await conexao.query('SELECT * FROM clientes');
    return clientes.rows;
  } catch (error) {
    console.error('Erro ao listar clientes:', error);
    throw new Error('Falha ao buscar clientes.');
  }
};

export const criarCliente = async (cliente) => {
  try {
    const { nome, email } = cliente;
    const query = 'INSERT INTO clientes (nome, email) VALUES ($1, $2)';
    const values = [nome, email];
    return await conexao.query(query, values);
  } catch (error) {
    console.error('Erro ao Criar Cliente ', error);
    throw new Error('Falha ao criar cliente.');
  }
};

export const deletarCliente = async (clienteId) => {
  try {
    await conexao.query('DELETE FROM clientes WHERE id = $1', [clienteId]);
  } catch (error) {
    console.error('Erro ao Deletar Cliente', error);
    throw new Error('Falha ao deletar cliente.');
  }
};

export const atualizarCliente = async (cliente) => {
  try {
    const { id, nome, email } = cliente;
    const query =
      'UPDATE clientes SET nome = $1, email = $2, WHERE id = $3 RETURNING *';
    const values = [nome, email, id];
    const updatedCliente = await conexao.query(query, values);
    return updatedCliente.rows[0];
  } catch (error) {
    console.error('Erro ao Atualizar Cliente', error);
    throw new Error('Falha ao Atualizar cliente.');
  }
};
