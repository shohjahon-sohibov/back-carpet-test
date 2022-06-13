const { sequelize, DataTypes } = require("../lib/sequelize");

const grassCollections = sequelize.define("grass_collection", {
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      min: 1,
    },
  },
  isNew: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  isTop: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  like: {
    type: DataTypes.INTEGER,
    validate: {
      min: 0,
      max: 1,
    },
  },
  dislike: {
    type: DataTypes.INTEGER,
    validate: {
      min: 0,
      max: 1,
    },
  },
  rating: {
    type: DataTypes.INTEGER,
    validate: {
      min: 0,
      max: 5,
    },
  },
  sell: DataTypes.INTEGER,
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      args: true,
      msg: "this name of image already in use!",
    },
  },
  imageName: DataTypes.STRING,
  imageType: DataTypes.STRING,
  product_code: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  collection_name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  in_market: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = {
    grassCollections
}