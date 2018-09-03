const { Server } = require('./../helper');

const { expect } = require('code');
const lab = require('lab').script();
exports.lab = lab;

const { suite, before, test } = lab;

suite('[Server][Util]', () => {
  let server;
  let response;

  before(async () => {
    server = await Server.init();
  });

  test('Should be able to get status', async () => {
    response = await server.serverInject('GET', '/status');
    expect(response.statusCode).to.equal(200);
  });
});
