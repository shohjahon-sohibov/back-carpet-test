const { sequelize, DataTypes } = require("../lib/sequelize");

const Admin = sequelize.define("user", {
  admin_id: {
    type :DataTypes.UUID,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4()
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
  role: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
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
});

module.exports = {
  Admin,
};
