'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Favorite.init({
    song_id: DataTypes.INTEGER

    ,
    list_id: DataTypes.INTEGER
,

    user_id: DataTypes.INTEGER

    ,
    status:  DataTypes.INTEGER
,
  }, {
    sequelize,
    modelName: 'Favorites',
  });
  return Favorite;
};