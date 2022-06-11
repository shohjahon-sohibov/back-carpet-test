const { sequelize, DataTypes } = require("../../lib/sequelize");
const Mustang_info = require('../carpet_infos/Mustang_info')

const Mustang_collection = sequelize.define("mustang_collection", {
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

  Mustang_collection.hasMany(Mustang_info, {
    as: 'carpet_infos', 
    foreignKey: {
      name: "carpet_id",
    },
  });
  Mustang_info.belongsTo(Mustang_collection, {
    as: 'carpet_infos', 
    foreignKey: {
      name: "carpet_id",
    },
  });
  
  module.exports = {
    Mustang_collection
  }