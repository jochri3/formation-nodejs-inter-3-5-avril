const errorMiddleware = (err, _, res, next) => {
  console.log(err.message);
  res.status(err.statusCode).json({ error: err.message });
};

module.exports = errorMiddleware;

// - Bad request
// - conflict error
// - unprocessable entity
