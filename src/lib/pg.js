const { Users, payments } = require("../model/model");
const { sequelize } = require('./sequelize')

async function pg() {
	try {
		let db = {};

		db.users = Users;
		db.payments = payments;

		console.log(db);

		const users = await db.users.findAll({
			raw: true,
		});
		console.log(users);

		// await db.users.create({
		// 	user_phone: "998901515064",
		// });

		return db;
	} catch (error) {
		console.log("ERROR:", error);
	}
}

module.exports = pg;
