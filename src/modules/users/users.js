const { Users } = require("../../model/model");
const { signUser, verifyUser } = require("../../lib/jwt");
const { Op } = require("sequelize");

module.exports = {
  GET_USERS: async (_, res) => {
    try {
      const allUsers = await Users.findAll();
      res.status(201).json(allUsers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  // REGISTER: async (req, res) => {
  //   try {
  //     const { fullname, username, email, phone, password, role, user_balance } = req.body;
  //     const newUser = await Users.create({
  //       fullname,
  //       username,
  //       email,
  //       phone,
  //       password,
  //       role,
  //       user_balance
  //     });
  //     const token = signUser({ id: newUser.id, role: newUser.role });

  //     res.status(201).json(token);
  //   } catch (error) {
  //     res.status(500).json({ error: error.message });
  //   }
  // },
  // LOGIN: async (req, res) => {
  //   try {
  //     const { username, email, phone, password } = req.body;

  //     const findUserByOption = await Users.findOne({
  //       where: {
  //         [Op.or]: [{ username }, { email }, { phone }],
  //       },
  //     });

  //     if (!findUserByOption) {
  //       res.status(401).json("User not found");
  //     } else {
  //       if (!findUserByOption.email) {
  //         res.status(401).json("Email is not correct");
  //       } else if (!findUserByOption.phone) {
  //         res.status(401).json("Phone is not correct");
  //       } else if (!findUserByOption.password) {
  //         res.status(401).json("Password is not correct");
  //       } else {
  //         const token = signUser({
  //           id: findUserByOption.id,
  //           role: findUserByOption.role,
  //         });

  //         res.status(201).json(token);
  //       }
  //     }
  //   } catch (error) {
  //     res.status(500).json({ error: error.message });
  //   }
  // },
  // DELETE_ACCOUNT: async (req, res) => {
  //   try {
  //     const { id, isDelete } = req.body;
  //     await Users.findOne(
  //       { isDelete },
  //       {
  //         where: {
  //           id,
  //         },
  //       }
  //     );
  //     res.status(201).json("resource deleted successfully");
  //   } catch (error) {
  //     res.status(500).json({ error: error.message });
  //   }
  // },
};
