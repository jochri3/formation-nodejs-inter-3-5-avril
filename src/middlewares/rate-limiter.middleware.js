const rateLimiter = require("express-rate-limit");

module.exports = rateLimiter({
  windowMS: 15 * 60 * 1000, // 5 minutes
  max: 100, // 10 Requêtes
  message:
    "Trop de requêtes effectuées depuis cette adresse IP, veuillez réessayer plus tard",
});
