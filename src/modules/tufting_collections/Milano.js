const Milano_collection = require("../../model/tufting_collections/Milano.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Milano_info = require("../../model/tufting_infos/Milano_info");

module.exports = {
  GET_MILANO: async (_, res) => {
    try {
      res.json(
        await Milano_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
              {
                model: Milano_info,
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
