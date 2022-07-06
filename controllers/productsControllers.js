const services = require('../services/productsServices');

const getAll = async (req, res, next) => {
  try {
    const data = await services.getAll();
    res.status(200).json(data);
  } catch (error) {
    next('0');
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await services.getById(id);
    // console.log(data);
    res.status(200).json(data);
  } catch (error) {
    // console.log(error);
    return next('0');
  }
};

const insert = async (req, res, next) => {
  try {
    const { name } = req.body;
    const result = await services.insert(name);
    // console.log(result);
    res.status(201).json(result);
  } catch (error) {
    next('1');
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log('id', id);
    const { name } = req.body;
    // const nome = JSON.stringify(name);
    // console.log('nome json', nome);
    await services.update({ name, id });
    console.log('nome 40', name);
    const ojb = {
      id,
      name,
    };
    return res.status(200).json(ojb);
  } catch (error) {
    return next('0');
  }
};

module.exports = { getAll, getById, insert, update };