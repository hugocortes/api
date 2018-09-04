const { redis } = require('./../conn');

/**
 * setBit sets a bit high or low
 * @param {String} key
 * @param {Number} value 0|1
 */
function setBit(key, value) {
  return new Promise((resolve, reject) => {
    return redis.SETBIT(key, 0, value, err => {
      return err ? reject(err) : resolve(true);
    });
  });
}

/**
 * getBit returns state of a bit by key
 * @param {String} key
 */
function getBit(key) {
  return new Promise((resolve, reject) => {
    return redis.GETBIT(key, 0, (err, result) => {
      return err ? reject(err) : resolve(result);
    });
  });
}

module.exports = {
  setBit,
  getBit
};
