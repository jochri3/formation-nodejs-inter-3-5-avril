const BadRequestError = require("../errors/bad-request.error");

const validateTaskMiddleware = (req, res, next) => {
  const {
    body: { title, description, start_date, end_date },
  } = req;
  if (!title || !description || !start_date || !end_date) {
    throw new BadRequestError("Veuillez bien remplir les champs obligatoires");
  }
  next();
};

module.exports = validateTaskMiddleware;
