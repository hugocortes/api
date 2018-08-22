require('dotenv').config();

const _ = require('lodash');

const Common = require('./common');

let newHelper;

/**
 * Inherits Common
 */
const Helper = {
  server: null,

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
      return await this.server.inject(request);
    } catch (error) {
      throw new Error(error);
    }
  },

  async startServer() {
    this.logger.test('starting server...');
    if (!_.isNil(this.server)) {
      this.logger.test('server previously started...');
      return this.server;
    }

    const serverConfig = require('./../../bin');
    this.server = await serverConfig.start();

    return this.server;
  }
};

async function helper() {
  if (!_.isNil(newHelper)) {
    await newHelper.startServer();
    return newHelper;
  }

  newHelper = Object.create({
    logger: Common.logger
  });

  _.forEach(Helper, (val, key) => {
    newHelper[key] = val;
  });

  await newHelper.startServer();

  _.forEach(newHelper, (val, key) => {
    if (typeof val === 'function') {
      newHelper[key] = newHelper[key].bind(newHelper);
    }
  });

  return newHelper;
}

module.exports = helper;
