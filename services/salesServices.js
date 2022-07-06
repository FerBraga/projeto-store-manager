const Model = require('../models/salesModels');

const getAll = async () => {
  const data = await Model.getAll();
  return data;
};

const getById = async (id) => {
  const data = await Model.getById(id);
  if (data.length === 0) {
    throw Error;
  }
  return data;
};

const sale = async () => {
  const result = await Model.sale();
  return result;
};

const insertSales = async (id, body) => {
    const finalResult = await Model.insertSales(id, body);
    return finalResult;
};

module.exports = { insertSales, sale, getAll, getById };