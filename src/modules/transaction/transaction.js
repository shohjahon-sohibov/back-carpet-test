const { sequelize } = require('../../lib/sequelize')
const { Sequelize } = require('sequelize')
const { users, transactions } = require("../../model/model");

module.exports = {
  INITIAL_TRANSACTION:  async (req, res) => {
    try {



    } catch (e) {
      res.status(500).json("Internal server error")
    }
  }
}





























//
// module.exports = {
//   TRANSACTION: async (req, res) => {
//     try {
//       const { username, money } = req.body;
//
//       const t = await sequelize.transaction();
//
//       const sender = await users.findOne({
//         where: {
//           username,
//         },
//       });
//
//       const receiver = await users.findOne({
//         where: {
//           username: "Urgaz_holding",
//         },
//       });
//
//       if (!sender || !receiver) {
//         t.rollback();
//         res.status(400).json("sender or receiver not found");
//       } else if (sender.account_money < money) {
//         t.rollback();
//         res.json("Money not enough");
//       } else {
//         await sender.update(
//           { account_money: sender.account_money - money },
//           { transactions: t }
//         );
//         await receiver.update(
//           { account_money: receiver.account_money + money },
//           { transactions: t }
//         );
//
//         await transactions.create(
//           { sender: username, paid: money, receiver: receiver.username },
//           { transactions: t }
//         );
//         t.commit();
//         res.status(200).json("tranfered");
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   },
// };

// const t = await sequelize.transaction({
//     isolationLevel: Sequelize.Transaction.READ_UNCOMMITTED
// });
// return Promise.resolve({
//     status: true,
//     data: t
// })