const Sequelize = require('sequelize');

const logger = require('./../../utils/logger');

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

module.exports = sequelize;
