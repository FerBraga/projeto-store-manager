const Model = require('../models/productsModels');

const getAll = async () => {
  const data = await Model.getAll();
  // console.log(data);
  return data;
};

const getById = async (id) => {
  const [data] = await Model.getById(id);
  if (data === undefined) {
    throw Error;
  }
  return data;
};

const insert = async (name) => {
  const data = await Model.insert(name);
  const response = { id: data, name };
  return response;
};
 
module.exports = { getAll, getById, insert };