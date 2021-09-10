'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class municipality extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.user, {foreignKey: 'municipalityId'})
    }
  };
  municipality.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'municipality',
  });
  return municipality;
};
