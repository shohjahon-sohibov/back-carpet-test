const Flower_collection = require("../../model/tufting_collections/Flower.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Flower_info = require("../../model/tufting_infos/Flower_info");

module.exports = {
  GET_FLOWER: async (_, res) => {
    try {
      res.json(
        await Flower_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Flower_info,
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
