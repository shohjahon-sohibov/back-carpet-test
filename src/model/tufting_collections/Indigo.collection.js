const { sequelize, DataTypes } = require("../../lib/sequelize");
const { Tufting_comments } = require("../comments/Tufting-comments");
const Indigo_info = require("../tufting_infos/Indigo_info");

const Indigo_collection = sequelize.define("indigo_collection", {
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
Indigo_collection.hasMany(Indigo_info, {
  foreignKey: {
    name: "product_id",
  },
});
Indigo_info.belongsTo(Indigo_collection, {
  foreignKey: {
    name: "product_id",
  },
});

// COMMENTS RELATION
Indigo_collection.hasMany(Tufting_comments, {
  foreignKey: {
    name: "product_id",
  },
});
Tufting_comments.belongsTo(Indigo_collection, {
  foreignKey: {
    name: "product_id",
  },
});

module.exports = Indigo_collection;
