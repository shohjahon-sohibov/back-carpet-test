const Hayat_collection = require("../../model/tufting_collections//Hayat.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Hayat_info = require("../../model/tufting_infos/Hayat_info");

module.exports = {
  GET_HAYAT: async (_, res) => {
    try {
      res.json(
        await Hayat_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Hayat_info,
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
