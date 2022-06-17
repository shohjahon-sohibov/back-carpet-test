const { sequelize, DataTypes } = require("../../lib/sequelize");
const Fifa_info = require("../grass_infos/Fifa_info");
const { Grass_comments } = require("../comments/Grass-comments");

const Fifa_collection = sequelize.define("fifa_collection", {
  grass_id: {
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
  like: DataTypes.INTEGER,
  dislike: DataTypes.INTEGER,
  rating: DataTypes.INTEGER,
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
Fifa_collection.hasMany(Fifa_info, {
  as: "grass_infos",
  foreignKey: {
    name: "grass_id",
  },
});
Fifa_info.belongsTo(Fifa_collection, {
  as: "grass_infos",
  foreignKey: {
    name: "grass_id",
  },
});

// COMMENTS RELATION
Fifa_collection.hasMany(Grass_comments, {
  foreignKey: {
    name: "grass_id",
  },
});
Grass_comments.belongsTo(Fifa_collection, {
  foreignKey: {
    name: "grass_id",
  },
});

module.exports = Fifa_collection;
