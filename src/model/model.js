const { sequelize, DataTypes } = require("../lib/sequelize");

const users = sequelize.define("user", {
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
  avatar: DataTypes.STRING,
  isDelete: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  account_money: DataTypes.INTEGER,
});

const Collections_info = sequelize.define("collection_info", {
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
    type: DataTypes.TEXT,
    defaultValue: 0,
    allowNull: false,
  },
  in_market: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  }
})

const comments = sequelize.define("comment", {
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
  customer: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      min: 1,
      max: 64,
    },
    timestamps: true,
  },
  phone: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      min: 3,
    },
  },
  product_name: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      min: 3,
      max: 256,
    },
  },
  product_code: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  size: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  color: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
    },
  },
  price: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      min: 1,
    },
  },
  total_amount: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      min: 1,
    },
  },
  callback: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
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

const transactions = sequelize.define("transaction", {
  sender: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      min: 1,
    },
  },
  paid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
      min: 0,
    },
  },
  receiver: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      min: 1,
    },
  },
});

grassCollections.hasMany(Collections_info)
Collections_info.belongsTo(grassCollections)


// products.hasMany(comments)
// comments.belongsTo(products)

// products.hasMany(Product_info)
// Product_info.belongsTo(products)


module.exports = {
  users,
  Collections_info,
  comments,
  carpetCollections,
  tuftingCollections,
  grassCollections,
  brands,
  news,
  aboutHolding,
  branch,
  orders,
  jobs,
  transactions,
};
