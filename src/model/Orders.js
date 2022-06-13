const { sequelize, DataTypes } = require("../lib/sequelize");

const orders = sequelize.define("order", {
  customer: {
    type: DataTypes.TEXT,
    validate: {
      min: 1,
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
      min: 1,
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

module.exports = {
  orders,
};
