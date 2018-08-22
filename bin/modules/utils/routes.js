function setupEnvRoute(server) {
  return server.route({
    method: 'GET',
    path: '/env',
    handler: () => {
      const response = {
        LOG_LEVEL: process.env.LOG_LEVEL,
        PORT: process.env.PORT,
        HOST: process.env.HOST,
        SECRET: process.env.SECRET,
        NODE_ENV: process.env.NODE_ENV
      };

      return response;
    }
  });
}

function setupStatusRoute(server) {
  return server.route({
    method: 'GET',
    path: '/status',
    handler: (request, h) => h.response()
  });
}

function init(server) {
  setupStatusRoute(server);
  setupEnvRoute(server);
}

module.exports = {
  init
};
