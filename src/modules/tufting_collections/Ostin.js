const Ostin_collection = require("../../model/tufting_collections/Ostin.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Ostin_info = require("../../model/tufting_infos/Ostin_info");

module.exports = {
  GET_OSTIN: async (_, res) => {
    try {
      res.json(
        await Ostin_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Ostin_info,
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
