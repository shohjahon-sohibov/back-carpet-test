const { Sequelize, DataTypes } = require("sequelize");
const { elConnections } = require('../config')

const sequelize = new Sequelize(
  elConnections
);

module.exports = {
  sequelize,
  DataTypes,
};
