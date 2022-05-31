const { users } = require("../model/model");
const { verifyUser } = require("../lib/jwt");

module.exports = {
  AUTH_ROLE_MID: async (req, res, next) => {
    try {
      req.body.role = "admin";
      next();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  IS_VALID_TOKEN_MID: async (req, res, next) => {
    try {
      const token = req.headers.token;

      if (!token) res.status(401).json("Unauthorized");

      const { id, role } = verifyUser(token);

      const findUser = await users.findOne({
        where: {
          id,
          role,
        },
      });

      if (findUser && findUser.id == id && findUser.role == 'admin') {
        next();
      } else {
        res.status(401).json("invalid token");
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
