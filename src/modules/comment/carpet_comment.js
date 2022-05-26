const { Carpet_comments } = require("../../model/model");

module.exports = {
  GET_COMMENTS: async (_, res) => {
    try {
      res.json(await Carpet_comments.findAll());
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  POST_COMMENT: async (req, res) => {
    try {
      const { body, carpetCollectionId } = req.body;

      await Carpet_comments.create({
        body,
        carpetCollectionId
      });

      res.status(201).json("resource created successfully");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  UPDATE_COMMENT: async (req, res) => {
    try {
      const { id, body, carpetCollectionId } = req.body;

      if (id && body) {
        const findCommentsId = await Carpet_comments.findOne({
          where: {
            id,
          },
        });

        if (findCommentsId) {
          await Carpet_comments.update(
            {
              body,
              carpetCollectionId
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
     const deletedComment = await Carpet_comments.destroy({
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
