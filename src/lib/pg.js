// const { Sequelize } = require("sequelize");
const { Users, payments } = require("../model/model");
const { sequelize } = require('./sequelize')

console.log(sequelize);

// const sequelize = new Sequelize(process.env.PG_URL, {
// 	logging: false,
// });

async function pg() {
	try {
		let db = {};

		db.users = Users;
		db.payments = payments;

		// await Relations(db);
		console.log(db);

		// await sequelize.sync({ force: false });

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
