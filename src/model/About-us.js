const { sequelize, DataTypes } = require("../lib/sequelize");

const aboutHolding = sequelize.define("about_holding", {
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
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "this name of image already in use!",
      },
    },
    imageName: DataTypes.STRING,
  });

module.exports = {
    aboutHolding
}