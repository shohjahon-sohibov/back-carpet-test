const { sequelize, DataTypes } = require("../../lib/sequelize");
const Salvatini_info = require('../carpet_infos/Salvatini_info')
const { Carpet_comments } = require("../comments/Carpet-comments");

const Salvatini_collection = sequelize.define("salvatini_collection", {
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
      defaultValue: false
    }
  });

  Salvatini_collection.hasMany(Salvatini_info, {
    as: 'carpet_infos', 
    foreignKey: {
      name: "carpet_id",
    },
  });
  Salvatini_info.belongsTo(Salvatini_collection, {
    as: 'carpet_infos', 
    foreignKey: {
      name: "carpet_id",
    },
  });

  // COMMENTS RELATION
Salvatini_collection.hasMany(Carpet_comments, {
  foreignKey: {
    name: "product_id",
  },
});
Carpet_comments.belongsTo(Salvatini_collection, {
  foreignKey: {
    name: "product_id",
  },
});
  
  module.exports = {
    Salvatini_collection
  }