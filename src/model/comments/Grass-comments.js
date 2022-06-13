const { sequelize, DataTypes } = require("../../lib/sequelize");

const Grass_comments = sequelize.define("grass_comment", {
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  });

module.exports = {
  Grass_comments,
}