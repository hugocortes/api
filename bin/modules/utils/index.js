const logger = require('./logger');

exports.register = (server, options) => {
  server.expose('logger', logger);
};

exports.name = 'utils';
