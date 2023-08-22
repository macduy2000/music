'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class List extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  List.init({
    name: DataTypes.STRING,
    user_id:DataTypes.INTEGER ,
    status: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Lists',
  });
  return List;
};