const Model = require('../models/productsModels');

const getAll = async () => {
  const data = await Model.getAll();
  // console.log(data);
  return data;
};

const getById = async (id) => {
  const [data] = await Model.getById(id);
  console.log(data);
  if (data === undefined) {
    throw Error;
  }
  return data;
};

module.exports = { getAll, getById };