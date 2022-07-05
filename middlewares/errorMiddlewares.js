const errors = [
  {
    status: 404,
    message: { message: 'Product not found' },
  },
  {
    status: 204,
    message: { message: 'Name is not valid' },
  },
  {
    status: 400,
    message: { message: '"name" is required' },
  },
  {
    status: 422,
    message: { message: '"name" length must be at least 5 characters long' },
  },
  {
    status: 400,
    message: { message: '"productId" is required' },
  },
  {
    status: 400,
    message: { message: '"quantity" is required' },
  },
  {
    status: 422,
    message: { message: '"quantity" must be greater than or equal to 1' },
  },
  {
    status: 404,
    message: { message: 'Product not found' },
  },
  {
    status: 404,
    message: { message: 'Sale not found' },
  },

];

const errorMiddleware = (error, _req, res, _next) => {
  res.status(errors[error].status).json(errors[error].message);
};

module.exports = errorMiddleware;