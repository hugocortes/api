const routes = require('./routes');
const methods = require('./methods');

exports.register = (server, options) => {
  routes.initialize(server);
  methods.initialize(server);
}

exports.name = 'storm';
