const { sequelize, DataTypes } = require("../../lib/sequelize");

const Tufting_comments = sequelize.define("tufting_comment", {
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  });

module.exports = {
    Tufting_comments
}