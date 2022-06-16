const Kedr_collection = require("../../model/tufting_collections/Kedr.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Kedr_info = require("../../model/tufting_infos/Kedr_info");

module.exports = {
  GET_KEDR: async (_, res) => {
    try {
      res.json(
        await Kedr_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Kedr_info,
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
