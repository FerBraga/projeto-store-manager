const services = require('../services/salesServices');

const insertSales = async (req, res, next) => {
  try {
    const { body } = req;
    const id = await services.sale();
    await services.insertSales(id, body);
    const final = {
      id,
      itemsSold: body,

    };
    console.log('resultado final', final);
    res.status(201).json(final);
  } catch (error) {
    next('0');
  }
};

module.exports = { insertSales };