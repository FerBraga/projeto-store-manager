const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM StoreManager.products';
  const [data] = await connection.execute(query);
  // console.log(data);
  return data;
};

const getById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id=?';
  const [data] = await connection.execute(query, [id]);
  return data;
};

const insert = async (name) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUES (?)';
  const [result] = await connection.execute(query, [name]);
  // console.log(result);
  const { insertId } = result;
  return insertId;
};

const update = async ({ name, id }) => {
  console.log('name parameter', name);
  const query = 'UPDATE StoreManager.products SET name=? WHERE id=?';
  const [data] = await connection.execute(query, [name, id]);
  console.log('data model', data);
  return data;
};

module.exports = { getAll, getById, insert, update };