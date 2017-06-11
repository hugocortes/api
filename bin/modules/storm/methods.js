'use strict'

const _ = require('lodash');
const Boom = require('boom');
const Promise = require('bluebird');

function getStorm() {
    let reply = {ping: 'pong'};
    return Promise.resolve(reply);
}

function initialize(server) {
    server.method('storm.get', getStorm, {bind: server});
}

exports.initialize = initialize;
