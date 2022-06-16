const Organ_collection = require("../../model/tufting_collections/Organ.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Organ_info = require("../../model/tufting_infos/Organ_info");

module.exports = {
  GET_ORGAN: async (_, res) => {
    try {
      res.json(
        await Organ_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Organ_info,
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
