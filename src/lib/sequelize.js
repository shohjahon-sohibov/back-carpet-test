const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "postgres://ysdpfncn:RPVTTDPDX0C1Hnh3akO4scf3MbS9rdRq@lallah.db.elephantsql.com/ysdpfncn"
);

module.exports = {
  sequelize,
  DataTypes,
};