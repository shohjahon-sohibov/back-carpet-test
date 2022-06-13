const { sequelize, DataTypes } = require("../lib/sequelize");

const branch = sequelize.define("branch", {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        min: 1,
      },
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        min: 1,
      },
    },
    phone: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        min: 3,
      },
    },
    gmail: {
      type: DataTypes.TEXT,
      allowNull: false,
      isEmail: true,
      validate: {
        min: 1,
      },
    },
    region: {
      type: DataTypes.TEXT,
      allowNull: false,
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
    branch
}