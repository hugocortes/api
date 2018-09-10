const Sequelize = require('sequelize');
const sequelize = require('./conn');

const User = sequelize.define(
  'User',
  {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true
    }
  },
  {
    tableName: 'user',
    freezeTableName: true,
    timestamps: true,
    underscored: true
  }
);

User.associate = models => {
  User.hasMany(models.UserThing, {
    as: 'userThing',
    sourceKey: 'id',
    foreignKey: 'user_id'
  });
};

module.exports = User;
