const mongoose = require('mongoose');

const logger = require('./../../utils/logger');

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

module.exports = mongoose;
