const { sequelize, DataTypes } = require("../lib/sequelize");

const jobs = sequelize.define("job", {
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        min: 1,
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        min: 1,
      },
    },
  });

module.exports = {
  jobs,
}