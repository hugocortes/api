const Redis = require('redis');

/**
 * redis connection
 */
const config = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  prefix: `${process.env.REDIS_KEY}:`
};

if (process.env.REDIS_PASS) {
  config.password = process.env.REDIS_PASS;
}

const redis = Redis.createClient(config);

module.exports = redis;
