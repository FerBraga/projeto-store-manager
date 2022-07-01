const errors = [
  {
    status: 404,
    message: { message: 'Product not found' },
  },
  {
    status: 204,
    message: { message: 'Name is not valid' },
  },
];

const errorMiddleware = (error, _req, res, _next) => {
  res.status(errors[error].status).json(errors[error].message);
};

module.exports = errorMiddleware;