const { sequelize, DataTypes } = require("../lib/sequelize");

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

module.exports = {
  payments,
};
