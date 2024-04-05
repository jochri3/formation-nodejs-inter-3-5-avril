const errorWrapper = require("./error-wrapper.middleware");
const errorMiddleware = require("./error.middleware");
const validateBodyMiddleware = require("./validation-body.middleware");
const rateLimiter = require("./rate-limiter.middleware");
const handleUnexpectedRoute = require("./unexpected-route.middleware");

module.exports = {
  errorWrapper,
  errorMiddleware,
  validateBodyMiddleware,
  rateLimiter,
  handleUnexpectedRoute,
};
