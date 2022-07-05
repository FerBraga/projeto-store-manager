const authSales = (req, res, next) => {
  const { body } = req;
  if (body.some((sale) => sale.productId === undefined)) {
    return next('4');
  }
  if (body.some((sale) => sale.quantity === undefined)) {
    return next('5');
  }
  if (body.some((sale) => sale.quantity <= 0)) {
    return next('6');
  }
   
  return next();
};

module.exports = { authSales };