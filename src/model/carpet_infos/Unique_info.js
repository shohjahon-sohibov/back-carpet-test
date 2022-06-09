const { sequelize, DataTypes } = require("../../lib/sequelize");

const Unique_info = sequelize.define("unique_info", {
    size: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: 0
    },
    price: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    in_market: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },  
    collection_name: {
      type: DataTypes.TEXT,
      defaultValue: false,
      allowNull: false,
    }
  });

  module.exports = Unique_info
  