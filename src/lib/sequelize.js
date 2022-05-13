const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "postgres://koscrbpo:IGZ-OT2TYxr5ZsFrDkqKzOvQlww4zE64@chunee.db.elephantsql.com/koscrbpo"
);

module.exports = {
  sequelize,
  DataTypes,
};