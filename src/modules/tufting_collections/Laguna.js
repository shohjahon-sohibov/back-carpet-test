const Laguna_collection = require("../../model/tufting_collections/Laguna.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Laguna_info = require("../../model/tufting_infos/Laguna_info");

module.exports = {
  GET_LAGUNA: async (_, res) => {
    try {
      res.json(
        await Laguna_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
              {
                model: Laguna_info,
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
