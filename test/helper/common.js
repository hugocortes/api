require('dotenv').config();

const Common = {
  logger: require('./../../bin/modules/utils/logger'),

  /**
   * delay by given ms
   * @param {Number} ms
   */
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
};

module.exports = Common;
