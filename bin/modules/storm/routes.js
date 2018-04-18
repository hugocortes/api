const Joi = require('joi');
const Boom = require('boom');

async function getStorm(request, h) {
  try {
    const response = await this.methods.storm.get();
    return h.response(response);
  } catch(err) {
    this.plugins.utils.logger.error(err);
    throw err;
  }
}

function setupGetStorm(server) {
  server.route({
    method: 'GET',
    path: '/storm',
    handler: getStorm,
    config: {
      bind: server
    }
  })
}

function initialize(server) {
  setupGetStorm(server);
}

exports.initialize = initialize;
