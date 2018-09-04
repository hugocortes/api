const sql = require('./sql');
const mongo = require('./mongo');
const redis = require('./redis');

exports.register = server => {
  server.expose('mongo', mongo);
  server.expose('sql', sql);
  server.expose('redis', redis);
};

exports.name = 'data';
