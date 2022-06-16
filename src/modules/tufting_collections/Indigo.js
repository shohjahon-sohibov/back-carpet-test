const Indigo_collection = require("../../model/tufting_collections/Indigo.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Indigo_info = require("../../model/tufting_infos/Indigo_info");

module.exports = {
  GET_INDIGO: async (_, res) => {
    try {
      res.json(
        await Indigo_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Indigo_info,
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
