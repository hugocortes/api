require('dotenv').config();

const _ = require('lodash');

const Common = require('./common');

let newInstance;

/**
 * Inherits Common
 */
const Server = {
  hapi: null,

  async serverInject(method, path, payload, query, token) {
    const request = {
      method,
      url: path,
      headers: {}
    };

    if (!_.isNil(token)) {
      request.headers.authorization = `Bearer ${token}`;
    }

    if (!_.isNil(payload)) {
      request.payload = payload;
    }

    try {
      return await this.hapi.inject(request);
    } catch (error) {
      throw new Error(error);
    }
  },

  async startServer() {
    this.logger.test('starting server...');
    if (!_.isNil(this.hapi)) {
      this.logger.test('server previously started...');
      return this.hapi;
    }

    const serverConfig = require('../../bin');
    this.hapi = await serverConfig.start();

    return this.hapi;
  }
};

async function init() {
  if (!_.isNil(newInstance)) {
    return newInstance;
  }

  newInstance = Object.create({
    logger: Common.logger
  });
  Object.assign(newInstance, Server);

  await newInstance.startServer();

  return newInstance;
}

module.exports = {
  init
};
