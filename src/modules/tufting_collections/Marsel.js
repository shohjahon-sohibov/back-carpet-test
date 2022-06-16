const Marsel_collection = require("../../model/tufting_collections/Marsel.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Marsel_info = require("../../model/tufting_infos/Marsel_info");

module.exports = {
  GET_MARSEL: async (_, res) => {
    try {
      res.json(
        await Marsel_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Marsel_info,
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
