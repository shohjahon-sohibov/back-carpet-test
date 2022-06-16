const Liber_collection = require("../../model/tufting_collections/Liber.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Liber_info = require("../../model/tufting_infos/Liber_info");

module.exports = {
  GET_LIBER: async (_, res) => {
    try {
      res.json(
        await Liber_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Liber_info,
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
