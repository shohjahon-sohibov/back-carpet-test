const { sequelize, DataTypes } = require("../lib/sequelize");

const Users = sequelize.define("user", {
  user_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4(),
    primaryKey: true,
  },
  fullname: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      min: 1,
      max: 64,
    },
  },
  username: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      min: 3,
      max: 25,
    },
    unique: {
      args: true,
      msg: "username already in use!",
    },
  },
  phone: {
    type: DataTypes.TEXT,
    unique: {
      args: true,
      msg: "phone already in use!",
    },
  },
  email: {
    type: DataTypes.TEXT,
    unique: {
      args: true,
      msg: "email already in use!",
    },
    isEmail: true,
  },
  role: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(64),
    notNull: true, // won't allow null
  },
  isDelete: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  user_balance: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

const payments = sequelize.define("payments", {
  payment_id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  payment_state: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  payment_amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  payment_perform_time: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  payment_cancel_time: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  payment_reason: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

const Carpet_info = sequelize.define("carpet_info", {
  size: {
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue: 0,
    validate: {
      min: 0,
      max: 64,
    }
  },
  price: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
  in_market: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  }
})

const Tufting_info = sequelize.define("tufting_info", {
  size: {
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue: 0,
    validate: {
      min: 0,
      max: 64,
    }
  },
  price: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
  in_market: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  }
})

const Grass_info = sequelize.define("grass_info", {
  size: {
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue: 0,
    validate: {
      min: 0,
      max: 64,
    }
  },
  price: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
  in_market: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  }
})


const Carpet_comments = sequelize.define("carpet_comment", {
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
});

const Tufting_comments = sequelize.define("tufting_comment", {
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
});

const Grass_comments = sequelize.define("grass_comment", {
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
});

const carpetCollections = sequelize.define("carpet_collection", {
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
  sell: {
    type: DataTypes.INTEGER,
    validate: {
      min: 0,
      max: 100,
    },
  },
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
    type: DataTypes.INTEGER
  },
  dislike: {
    type: DataTypes.INTEGER
  },
  rating: {
    type: DataTypes.INTEGER
  },
  sell: {
    type: DataTypes.INTEGER,
    validate: {
      min: 0,
      max: 100,
    },
  },
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
  sell: {
    type: DataTypes.INTEGER,
    validate: {
      min: 0,
      max: 100,
    },
  },
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

const brands = sequelize.define("brand", {
  imageType: DataTypes.STRING,
  imageName: DataTypes.STRING,
  imageUrl: {
    type: DataTypes.STRING,
    unique: {
      args: true,
      msg: "this name of image already in use!",
    },
  },
});

const news = sequelize.define("news", {
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      min: 3,
      max: 64,
    },
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      min: 25,
      max: 256,
    },
  },
  imgUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      args: true,
      msg: "this name of image already in use!",
    },
  },
  imageName: DataTypes.STRING,
});

const aboutHolding = sequelize.define("about_holding", {
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      min: 3,
      max: 64,
    },
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      min: 25,
      max: 256,
    },
  },
  imgUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      args: true,
      msg: "this name of image already in use!",
    },
  },
  imageName: DataTypes.STRING,
});

const branch = sequelize.define("branch", {
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      min: 1,
      max: 64,
    },
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      min: 1,
      max: 256,
    },
  },
  phone: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      min: 3,
    },
  },
  gmail: {
    type: DataTypes.TEXT,
    allowNull: false,
    isEmail: true,
    validate: {
      min: 1,
      max: 256,
    },
  },
  region: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  imgUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      args: true,
      msg: "this name of image already in use!",
    },
  },
  imageName: DataTypes.STRING,
});

const orders = sequelize.define("order", {
  order_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4(),
    primaryKey: true,
  },
  customer: {
    type: DataTypes.TEXT,
    validate: {
      min: 1,
      max: 64,
    },
    timestamps: true,
  },
  phone: {
    type: DataTypes.TEXT,
    validate: {
      min: 3,
    },
  },
  product_name: {
    type: DataTypes.TEXT,
    validate: {
      min: 3,
      max: 256,
    },
  },
  product_code: {
    type: DataTypes.TEXT,
  },
  size: {
    type: DataTypes.TEXT,
  },
  color: {
    type: DataTypes.TEXT,
  },
  address: {
    type: DataTypes.TEXT,
  },
  quantity: {
    type: DataTypes.INTEGER,
    validate: {
      min: 1,
    },
  },
  price: {
    type: DataTypes.TEXT,
    validate: {
      min: 1,
    },
  },
  total_amount: {
    type: DataTypes.TEXT,
    validate: {
      min: 1,
    },
  },
  callback: {
    type: DataTypes.BOOLEAN,
  },
});

const jobs = sequelize.define("job", {
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      min: 1,
    },
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      min: 3,
    },
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

Users.hasMany(payments, {
  foreignKey: {
    name: "user_id",
    allowNull: false,
  },
});

payments.belongsTo(Users, {
  foreignKey: {
    name: "user_id",
    allowNull: false,
  },
});

orders.hasMany(payments, {
  foreignKey: {
    name: "order_id",
    allowNull: false,
  },
});

payments.belongsTo(orders, {
  foreignKey: {
    name: "order_id",
    allowNull: false,
  },
});

carpetCollections.hasMany(Carpet_info)  // CARPET infos => price, size and etc...
Carpet_info.belongsTo(carpetCollections)

tuftingCollections.hasMany(Tufting_info)  //  TUFTING infos => price, size and etc...
Tufting_info.belongsTo(tuftingCollections)

grassCollections.hasMany(Grass_info)  //  GRASS infos => price, size and etc...
Grass_info.belongsTo(grassCollections)


carpetCollections.hasMany(Carpet_comments) // CARPET comments
Carpet_comments.belongsTo(carpetCollections);

tuftingCollections.hasMany(Tufting_comments) // TUFTING comments
Tufting_comments.belongsTo(tuftingCollections);

grassCollections.hasMany(Grass_comments) // GRASS comments
Grass_comments.belongsTo(grassCollections);

module.exports = {
  Users,
  payments,
  Carpet_info,
  Tufting_info,
  Grass_info,
  Carpet_comments,
  Tufting_comments,
  Grass_comments,
  carpetCollections,
  tuftingCollections,
  grassCollections,
  brands,
  news,
  aboutHolding,
  branch,
  orders,
  jobs,
  // transactions,
};
