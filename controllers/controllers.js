const services = require('../services/services');

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

module.exports = { getAll, getById };