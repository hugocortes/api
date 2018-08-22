const routes = require('./routes');
const logger = require('./logger');

exports.register = server => {
  routes.init(server);

  server.expose('logger', logger);
};

exports.name = 'utils';
