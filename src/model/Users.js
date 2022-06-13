const { sequelize, DataTypes } = require("../lib/sequelize");
const { payments } = require("./Payment");

const Users = sequelize.define("user", {
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

Users.hasMany(payments);
payments.belongsTo(Users);

module.exports = {
  Users,
};
