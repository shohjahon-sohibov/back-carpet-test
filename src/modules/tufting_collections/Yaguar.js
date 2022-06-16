const Yaguar_collection = require("../../model/tufting_collections/Yaguar.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Yaguar_info = require("../../model/tufting_infos/Yaguar_info");

module.exports = {
  GET_YAGUAR: async (_, res) => {
    try {
      res.json(
        await Yaguar_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Yaguar_info,
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
