const _ = require('lodash');

const models = {
  User: require('./User'),
  UserThing: require('./UserThing')
};

_.forEach(models, model => {
  if (model.associate) {
    model.associate(models);
  }
});

module.exports = models;
