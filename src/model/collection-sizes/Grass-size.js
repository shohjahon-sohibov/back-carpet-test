const { sequelize, DataTypes } = require("../../lib/sequelize");

const Grass_info = sequelize.define("grass_info", {
  size: {
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue: 0,
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
});

module.exports = {
  Grass_info,
};
