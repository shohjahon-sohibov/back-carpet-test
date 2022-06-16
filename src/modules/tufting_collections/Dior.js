const Dior_collection = require("../../model/tufting_collections/Dior.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Dior_info = require("../../model/tufting_infos/Dior_info");

module.exports = {
  GET_DIOR: async (_, res) => {
    try {
      res.json(
        await Dior_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Dior_info,
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
