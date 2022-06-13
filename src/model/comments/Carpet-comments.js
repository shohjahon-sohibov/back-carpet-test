const { sequelize, DataTypes } = require("../../lib/sequelize");

const Carpet_comments = sequelize.define("carpet_comment", {
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = {
  Carpet_comments,
};
