const errorMiddleware = (err, _, res, next) => {
  console.log(err.message);
  res.status(500).json({ error: "Tout va très mal :(" });
};

module.exports = errorMiddleware;
