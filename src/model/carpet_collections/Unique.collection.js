const { sequelize, DataTypes } = require("../../lib/sequelize");
const Unique_info = require("../carpet_infos/Unique_info");
const { Carpet_comments } = require("../comments/Carpet-comments");

const Unique_collection = sequelize.define("unique_collection", {
  carpet_id: {
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

Unique_collection.hasMany(Unique_info, {
  as: "carpet_infos",
  foreignKey: {
    name: "carpet_id",
  },
});
Unique_info.belongsTo(Unique_collection, {
  as: "carpet_infos",
  foreignKey: {
    name: "carpet_id",
  },
});

// COMMENTS RELATION
Unique_collection.hasMany(Carpet_comments, {
  foreignKey: {
    name: "product_id",
  },
});
Carpet_comments.belongsTo(Unique_collection, {
  foreignKey: {
    name: "product_id",
  },
});

module.exports = {
  Unique_collection,
};
