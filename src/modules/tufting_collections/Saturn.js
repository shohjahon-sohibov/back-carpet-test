const Saturn_collection = require("../../model/tufting_collections/Saturn.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Saturn_info = require("../../model/tufting_infos/Saturn_info");

module.exports = {
  GET_SATURN: async (_, res) => {
    try {
      res.json(
        await Saturn_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
              {
                model: Saturn_info,
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
