const { Collections_info } = require("../../model/model");

module.exports = {
  GET_COLLECTOPN_INFOS: async (_, res) => {
    try {
      const allJobs = await jobs.findAll();
      res.status(200).json(allJobs);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  POST_COLLECTOPN_INFO: async (req, res) => {
    try {
      const { title, description, productId    } = req.body;

      await jobs.create({
        title,
        description,
      });
      res.status(201).json("resource created succsessfully");
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  UPDATE_COLLECTOPN_INFO: async (req, res) => {
    try {
      const { id, title, description } = req.body;

      await jobs.update(
        {
          title,
          description,
        },
        {
          where: {
            id,
          },
        }
      );

      res.status(200).json("resource updated successfuly");
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  DELETE_COLLECTOPN_INFO: async (req, res) => {
    try {
      const { id } = req.body;
      await jobs.destroy({
        where: {
          id,
        },
      });
      res.status(200).json("resource deleted successfuly");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
