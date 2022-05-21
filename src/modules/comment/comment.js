const { comments, products } = require("../../model/model");

module.exports = {
  GET_COMMENTS: async (_, res) => {
    try {
      res.json(await comments.findAll({
          include: [
            {
              model: products
            },
          ]
      }));
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  POST_COMMENT: async (req, res) => {
    try {
      const { body, productId } = req.body;

      await comments.create({
        body,
        productId
      });

      res.status(201).json("resource created successfully");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  UPDATE_COMMENT: async (req, res) => {
    try {
      const { id, body, productId } = req.body;

      if (id && body) {
        const findCommentsId = await comments.findOne({
          where: {
            id,
          },
        });

        if (findCommentsId) {
          await comments.update(
            {
              body,
              productId
            },
            {
              where: {
                id,
              },
            }
          );

          res.status(200).json("resource updated successfully");
        } else {
          res.status(404).json("Not found");
        }
      } else {
        res.status(500).json("key is not provided");
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  DELETE_COMMENT: async (req, res) => {
    try {
      const { id } = req.body;
     const deletedComment = await comments.destroy({
        where: {
          id,
        },
      });

      if(!deletedComment) {
        res.status(400).json("error in deleted")
      } else {
          res.status(200).json("resource deleted successfully");
      }

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
