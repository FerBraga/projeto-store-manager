const Model = require('../models/salesModels');

const sale = async () => {
  const result = await Model.sale();
  return result;
};

const insertSales = async (id, body) => {
  const data = await Model.findId();
  const found = body.some((element) => !data.includes(element.productId));
  if (found) {
    throw Error;
  } else {
    const finalResult = await Model.insertSales(id, body);
    return finalResult;
  }
};

module.exports = { insertSales, sale };