const { Users } = require("../../model/Users");

module.exports = {
  GET_USER: async (_, res) => {
    try {
      res.status(200).json(await Users.findAll());
    } catch (error) {
      console.log(error);
    }
  },
  DELETE_USER: async (req, res) => {
    try {
      const { id } = req.body;

      await Users.update(
        {
          isDelete: true,
        },
        {
          where: {
            id,
          },
        }
      );
      res.status(200).json("ok");
    } catch (error) {
      console.log(error);
    }
  },
  DROP_USER: async (req, res) => {
    try {
      const { id } = req.body;

      await Users.destroy({
        where: {
          id,
        },
      });
      res.status(200).json("ok");
    } catch (error) {
      console.log(error);
    }
  },
};
