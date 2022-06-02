// const { INTEGER } = require("sequelize/types");

// module.exports = async (sequelize, Sequelize) => {
// 	return await sequelize.define("users", {
//   user_id: {
//     type: INTEGER,
//     primaryKey: true,
//   },
//   fullname: {
//     type: DataTypes.TEXT,
//     allowNull: false,
//     validate: {
//       min: 1,
//       max: 64,
//     },
//   },
//   username: {
//     type: DataTypes.TEXT,
//     allowNull: false,
//     validate: {
//       min: 3,
//       max: 25,
//     },
//     unique: {
//       args: true,
//       msg: "username already in use!",
//     },
//   },
//   phone: {
//     type: DataTypes.TEXT,
//     unique: {
//       args: true,
//       msg: "phone already in use!",
//     },
//   },
//   email: {
//     type: DataTypes.TEXT,
//     unique: {
//       args: true,
//       msg: "email already in use!",
//     },
//     isEmail: true,
//   },
//   role: {
//     type: DataTypes.STRING(25),
//     allowNull: false,
//   },
//   password: {
//     type: DataTypes.STRING(64),
//     notNull: true, // won't allow null
//   },
//   isDelete: {
//     type: DataTypes.BOOLEAN,
//     defaultValue: false,
//   },
//   user_balance: {
//     type: Sequelize.INTEGER,
//     allowNull: false,
//     defaultValue: 0,
//   },
// 	});
// };
