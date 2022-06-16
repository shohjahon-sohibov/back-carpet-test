const Hilton_collection = require("../../model/tufting_collections/Hilton.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Hilton_info = require("../../model/tufting_infos/Hilton_info");

module.exports = {
  GET_HILTON: async (_, res) => {
    try {
      res.json(
        await Hilton_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Hilton_info,
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
