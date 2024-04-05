const validateBodyMiddleware = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    const errors = error.details.map((detail) => {
      return {
        field: detail.context.label,
        message: detail.message.replace(/"/g, ""),
      };
    });
    return res.status(400).send(errors);
  }
  next();
};

module.exports = validateBodyMiddleware;
