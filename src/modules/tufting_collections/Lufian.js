const Lufian_collection = require("../../model/tufting_collections/Lufian.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Lufian_info = require("../../model/tufting_infos/Lufian_info");

module.exports = {
  GET_LUFIAN: async (_, res) => {
    try {
      res.json(
        await Lufian_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
              {
                model: Lufian_info,
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
