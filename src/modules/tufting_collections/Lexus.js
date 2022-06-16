const Lexus_collection = require("../../model/tufting_collections/Lexus.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Lexus_info = require("../../model/tufting_infos/Lexus_info");

module.exports = {
  GET_LEXUS: async (_, res) => {
    try {
      res.json(
        await Lexus_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
              {
                model: Lexus_info,
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
