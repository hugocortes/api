const redis = require('redis');
const mongoose = require('mongoose');
const Sequelize = require('sequelize');

const logger = require('./../utils/logger');

/**
 * mongo connection
 */
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true }
);

mongoose.set('debug', (coll, method, query, doc) => {
  logger.db('mongoose:', coll, method, query, doc);
});

/**
 * sql connection
 */
const sequelize = new Sequelize(
  process.env.MYSQL_DB,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASS,
  {
    host: process.env.MYSQL_HOST,
    logging: msg => logger.db(msg),
    port: process.env.MYSQL_PORT || '3306',
    dialect: 'mysql'
  }
);

sequelize.sync({
  force: false
});

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

const client = redis.createClient(config);

module.exports = {
  sequelize,
  mongoose,
  redis: client
};
