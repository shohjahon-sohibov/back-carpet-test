const Eco_collection = require("../../model/tufting_collections/Eco.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Eco_info = require("../../model/tufting_infos/Eco_info");

module.exports = {
  GET_ECO: async (_, res) => {
    try {
      res.json(
        await Eco_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Eco_info,
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
