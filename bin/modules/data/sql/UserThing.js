const Sequelize = require('sequelize');
const sequelize = require('./conn');

const UserThing = sequelize.define(
  'UserThing',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    user_id: {
      type: Sequelize.UUID,
      allowNull: false
    }
  },
  {
    tableName: 'user_thing',
    freezeTableName: true,
    timestamps: true,
    underscored: true
  }
);

UserThing.associate = models => {
  UserThing.belongsTo(models.User, {
    as: 'user',
    targetKey: 'id',
    foreignKey: 'user_id',
    onDelete: 'cascade'
  });
};

module.exports = UserThing;
