const Perfect_collection = require("../../model/tufting_collections/Perfect.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Perfect_info = require("../../model/tufting_infos/Perfect_info");

module.exports = {
  GET_PEFECT: async (_, res) => {
    try {
      res.json(
        await Perfect_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Perfect_info,
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
