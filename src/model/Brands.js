const { sequelize, DataTypes } = require("../lib/sequelize");

const brands = sequelize.define("brand", {
    imageType: DataTypes.STRING,
    imageName: DataTypes.STRING,
    imageUrl: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: "this name of image already in use!",
      },
    },
  });

module.exports = {
    brands
}