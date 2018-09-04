require('dotenv').config();

const Common = {
  logger: require('./../../bin/modules/utils/logger'),

  /**
   * delay by given ms
   * @param {Number} ms
   */
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },

  /**
   * data modules
   */
  data: {
    mongo: require('./../../bin/modules/data/mongo'),
    sql: require('./../../bin/modules/data/sql'),
    redis: require('./../../bin/modules/data/redis')
  }
};

module.exports = Common;
