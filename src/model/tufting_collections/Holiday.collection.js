const { sequelize, DataTypes } = require("../../lib/sequelize");
const { Tufting_comments } = require("../comments/Tufting-comments");
const Holiday_info = require("../tufting_infos/Holiday_info");

const Holiday_collection = sequelize.define("holiday_collection", {
  product_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4(),
    primaryKey: true,
    allowNull: false,
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

// collection_info => SIZE, PRICE RELATION
Holiday_collection.hasMany(Holiday_info, {
  foreignKey: {
    name: "product_id",
  },
});
Holiday_info.belongsTo(Holiday_collection, {
  foreignKey: {
    name: "product_id",
  },
});

// COMMENTS RELATION
Holiday_collection.hasMany(Tufting_comments, {
  foreignKey: {
    name: "product_id",
  },
});
Tufting_comments.belongsTo(Holiday_collection, {
  foreignKey: {
    name: "product_id",
  },
});

module.exports = Holiday_collection;
