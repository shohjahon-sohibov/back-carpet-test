const { sequelize, DataTypes } = require("../../lib/sequelize");
const { Tufting_comments } = require("../comments/Tufting-comments");
const Meridian_info = require("../tufting_infos/Meridian_info");

const Meridian_collection = sequelize.define("meridian_collection", {
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
Meridian_collection.hasMany(Meridian_info, {
  foreignKey: {
    name: "product_id",
  },
});
Meridian_info.belongsTo(Meridian_collection, {
  foreignKey: {
    name: "product_id",
  },
});

// COMMENTS RELATION
Meridian_collection.hasMany(Tufting_comments, {
  foreignKey: {
    name: "product_id",
  },
});
Tufting_comments.belongsTo(Meridian_collection, {
  foreignKey: {
    name: "product_id",
  },
});

module.exports = Meridian_collection;
