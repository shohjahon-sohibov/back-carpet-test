const Holiday_collection = require("../../model/tufting_collections/Holiday.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Holiday_info = require("../../model/tufting_infos/Holiday_info");

module.exports = {
  GET_HOLIDAY: async (_, res) => {
    try {
      res.json(
        await Holiday_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Holiday_info,
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
