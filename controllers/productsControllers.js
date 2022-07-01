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

module.exports = { getAll, getById, insert };