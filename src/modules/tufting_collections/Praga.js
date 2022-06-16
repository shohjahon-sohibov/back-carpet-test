const Praga_collection = require("../../model/tufting_collections/Praga.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Praga_info = require("../../model/tufting_infos/Praga_info");

module.exports = {
  GET_PRAGA: async (_, res) => {
    try {
      res.json(
        await Praga_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Praga_info,
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
