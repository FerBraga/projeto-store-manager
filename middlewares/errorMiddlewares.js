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
];

const errorMiddleware = (error, _req, res, _next) => {
  res.status(errors[error].status).json(errors[error].message);
};

module.exports = errorMiddleware;