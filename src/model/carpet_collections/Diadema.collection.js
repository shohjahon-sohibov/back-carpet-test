const { sequelize, DataTypes } = require("../../lib/sequelize");
const Diadema_info = require("../carpet_infos/Diadema_info");
const { Carpet_comments } = require("../comments/Carpet-comments");

const Diadema_collection = sequelize.define("diadema_collection", {
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

Diadema_collection.hasMany(Diadema_info, {
  as: "carpet_infos",
  foreignKey: {
    name: "carpet_id",
  },
});
Diadema_info.belongsTo(Diadema_collection, {
  as: "carpet_infos",
  foreignKey: {
    name: "carpet_id",
  },
});

// COMMENTS RELATION
Diadema_collection.hasMany(Carpet_comments, {
  foreignKey: {
    name: "product_id",
  },
});
Carpet_comments.belongsTo(Diadema_collection, {
  foreignKey: {
    name: "product_id",
  },
});

module.exports = {
  Diadema_collection,
};
