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
  // console.log(data);
  return data;
};

module.exports = { getAll, getById };