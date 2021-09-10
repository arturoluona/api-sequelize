'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.municipality, {foreignKey: 'municipalityId'})
      this.hasMany(models.vehicle, {foreignKey: 'userId'})
    }
  };
  user.init({
    name: DataTypes.STRING,
    ci: DataTypes.STRING,
    date_birth: DataTypes.DATE,
    profession: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    gender: DataTypes.CHAR,
    municipalityId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};
