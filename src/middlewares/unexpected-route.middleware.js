const handleUnexpectedRoute = (req, res, next) => {
  res.status(404).send("404 - Resource not found");
};

module.exports = handleUnexpectedRoute;
