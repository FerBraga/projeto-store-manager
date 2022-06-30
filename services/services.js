const Model = require('../models/models');

const getAll = async () => {
  const data = await Model.getAll();
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