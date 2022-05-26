const { Sequelize, DataTypes } = require("sequelize");
const { elConnections } = require('../config')

const sequelize = new Sequelize(
  elConnections, {
    dialect: 'postgres',
        logging: false
  }
);
module.exports = {
  sequelize,
  DataTypes,
};
