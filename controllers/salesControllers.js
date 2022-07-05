const services = require('../services/salesServices');
const Model = require('../models/salesModels');

const getAll = async (req, res, next) => {
  try {
    const data = await services.getAll();
    res.status(200).json(data);
  } catch (error) {
    next('8');
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await services.getById(id);
    res.status(200).json(data);
  } catch (error) {
    next('8');
  }
};

const insertSales = async (req, res, next) => {
  try {
    const { body } = req;
    const data = await Model.findId();
    const found = body.some((element) => !data.includes(element.productId));
    if (found) {
      throw Error;
    } 
    const id = await services.sale();
    await services.insertSales(id, body);
    const final = {
      id,
      itemsSold: body,

    };
   return res.status(201).json(final);
  } catch (error) {
    console.log(error);
    next('0');
  }
};

module.exports = { insertSales, getAll, getById };