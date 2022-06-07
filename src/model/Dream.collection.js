const { sequelize, DataTypes } = require("../lib/sequelize");
const { Carpet_info, Carpet_comments } = require("./model");

const Dream_collection = sequelize.define("dream_collection", {
  carpet_id: {
    type: DataTypes.INTEGER,
    // defaultValue: DataTypes.UUIDV4(),
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
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
  },
  dislike: {
    type: DataTypes.INTEGER,
  },
  rating: {
    type: DataTypes.INTEGER,
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

Dream_collection.hasMany(Carpet_info, {
  foreignKey: {
    name: "carpet_id",
    allowNull: false,
  },
});
Carpet_info.belongsTo(Dream_collection, {
  foreignKey: {
    name: "carpet_id",
    allowNull: false,
  },
});

module.exports = {
  Dream_collection,
};
