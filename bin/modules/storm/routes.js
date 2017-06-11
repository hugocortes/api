const Joi = require('joi');

function getStorm(request, reply) {
    this.methods.storm.get()
        .then(reply)
        .catch(reply);
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
