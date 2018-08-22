const { Helper } = require('./../helper');

const { expect } = require('code');
const lab = require('lab').script();
exports.lab = lab;

const { suite, before, test } = lab;

suite('[Server][Util]', () => {
  let Server;
  let response;

  before(async () => {
    Server = await Helper();
  });

  test('Should be able to get status', async () => {
    response = await Server.serverInject('GET', '/status');
    expect(response.statusCode).to.equal(200);
  });
});
