const Rodin_collection = require("../../model/tufting_collections/Rodin.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Rodin_info = require("../../model/tufting_infos/Rodin_info");

module.exports = {
  GET_RODIN: async (_, res) => {
    try {
      res.json(
        await Rodin_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
              {
                model: Rodin_info,
                as: "tufting_infos",
                attributes: ["id", "size", "price", "in_market", "product_id"],
              },
          ],
        })
      );
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  },
};
