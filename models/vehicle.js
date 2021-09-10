'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.mark, {foreignKey: 'markId'})
      this.belongsTo(models.user, {foreignKey: 'userId'})
    }
  };
  vehicle.init({
    name: DataTypes.STRING,
    year: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    markId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'vehicle',
  });
  return vehicle;
};
