'use strict';
module.exports = function(sequelize, DataTypes) {
  var decks = sequelize.define('decks', {
    topic: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return decks;
};