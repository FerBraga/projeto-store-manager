const connection = require('./connection');

const getAll = async () => {
  const query = `SELECT b.sale_id AS saleId, a.date, b.product_id AS productId,
  b.quantity FROM StoreManager.sales AS a
  INNER JOIN StoreManager.sales_products AS b
  ON a.id = b.sale_id`;
  const [data] = await connection.execute(query);
  console.log(data, 'all');
  return data;
};

const getById = async (id) => {
  const query = `SELECT a.date, b.product_id AS productId,
  b.quantity FROM StoreManager.sales AS a
  INNER JOIN StoreManager.sales_products AS b
  ON a.id = b.sale_id
  WHERE a.id=?`;
  const [data] = await connection.execute(query, [id]);
  console.log(data, 'data');
  return data;
};

const sale = async () => {
  const query = 'INSERT INTO StoreManager.sales (date) VALUES (now())';
  const [result] = await connection.execute(query);
  return result.insertId;
};

const findId = async () => {
  const query = 'SELECT id FROM StoreManager.products';
  const [data] = await connection.execute(query);
  const result = data.map((element) => element.id);
  return result;
};

const insertSales = async (id, body) => {
  const query = 'INSERT INTO StoreManager.sales_products'
     + '(sale_id, product_id, quantity) VALUES (?, ?, ?)';
  await Promise.all(body
    .map(async (element) => connection.execute(query, [id, element.productId, element.quantity])));
};

module.exports = { insertSales, sale, findId, getAll, getById };