const { sequelize, DataTypes } = require("../../lib/sequelize");
const Artemida_info = require("../carpet_infos/Artemida_info");
const { Carpet_comments } = require("../comments/Carpet-comments");

const Artemida_collection = sequelize.define("artemida_collection", {
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

Artemida_collection.hasMany(Artemida_info, {
  as: "carpet_infos",
  foreignKey: {
    name: "carpet_id",
  },
});
Artemida_info.belongsTo(Artemida_collection, {
  as: "carpet_infos",
  foreignKey: {
    name: "carpet_id",
  },
});

// COMMENTS RELATION
Artemida_collection.hasMany(Carpet_comments, {
  foreignKey: {
    name: "product_id",
  },
});
Carpet_comments.belongsTo(Artemida_collection, {
  foreignKey: {
    name: "product_id",
  },
});

module.exports = {
  Artemida_collection,
};
