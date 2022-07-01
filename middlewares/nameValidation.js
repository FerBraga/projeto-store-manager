const authName = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return next('2');
  }
  if (name.length < 5) {
    return next('3');
  }
  return next();
};

module.exports = authName;