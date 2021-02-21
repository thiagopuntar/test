const logger = require("../logger");

module.exports = function (err, req, res, next) {
  logger.error(err);
  res.status(400).send(err.message);
};
