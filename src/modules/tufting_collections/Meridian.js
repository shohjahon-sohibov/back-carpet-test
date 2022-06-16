const Meridian_collection = require("../../model/tufting_collections/Meridian.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Meridian_info = require("../../model/tufting_infos/Meridian_info");

module.exports = {
  GET_MERIDIAN: async (_, res) => {
    try {
      res.json(
        await Meridian_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Meridian_info,
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
