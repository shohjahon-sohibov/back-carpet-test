const Elis_collection = require("../../model/tufting_collections/Elis.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Elis_info = require("../../model/tufting_infos/Elis_info");

module.exports = {
  GET_ELIS: async (_, res) => {
    try {
      res.json(
        await Elis_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Elis_info,
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
