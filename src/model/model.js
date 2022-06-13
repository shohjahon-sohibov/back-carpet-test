const { sequelize, DataTypes } = require("../lib/sequelize");

const Clients = sequelize.define("client", {
  client_name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  client_phone: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

const carpetCollections = sequelize.define("carpet_collection", {
  carpet_id: {
    type: DataTypes.INTEGER,
    // defaultValue: DataTypes.UUIDV4(),
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
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
    type: DataTypes.STRING,
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

const tuftingCollections = sequelize.define("tufting_collection", {
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

const grassCollections = sequelize.define("grass_collection", {
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
    validate: {
      min: 0,
      max: 1,
    },
  },
  dislike: {
    type: DataTypes.INTEGER,
    validate: {
      min: 0,
      max: 1,
    },
  },
  rating: {
    type: DataTypes.INTEGER,
    validate: {
      min: 0,
      max: 5,
    },
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

// const transactions = sequelize.define("transaction", {
//   sender: {
//     type: DataTypes.TEXT,
//     allowNull: false,
//     validate: {
//       min: 1,
//     },
//   },
//   paid: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     defaultValue: 0,
//     validate: {
//       min: 0,
//     },
//   },
//   receiver: {
//     type: DataTypes.TEXT,
//     allowNull: false,
//     validate: {
//       min: 1,
//     },
//   },
// });

// orders.hasMany(payments, {
//   foreignKey: {
//     name: "order_id",
//     allowNull: false,
//   },
// });

// payments.belongsTo(orders, {
//   foreignKey: {
//     name: "order_id",
//     allowNull: false,
//   },
// });

// carpetCollections.hasMany(Carpet_info)  // CARPET infos => price, size and etc...
// Carpet_info.belongsTo(carpetCollections)

// tuftingCollections.hasMany(Tufting_info)  //  TUFTING infos => price, size and etc...
// Tufting_info.belongsTo(tuftingCollections)

// grassCollections.hasMany(Grass_info)  //  GRASS infos => price, size and etc...
// Grass_info.belongsTo(grassCollections)

// carpetCollections.hasMany(Carpet_comments) // CARPET comments
// Carpet_comments.belongsTo(carpetCollections);

// tuftingCollections.hasMany(Tufting_comments) // TUFTING comments
// Tufting_comments.belongsTo(tuftingCollections);

// grassCollections.hasMany(Grass_comments) // GRASS comments
// Grass_comments.belongsTo(grassCollections);

module.exports = {
  Clients,
  carpetCollections,
  tuftingCollections,
  grassCollections,
};
