const Topol_collection = require("../../model/tufting_collections/Topol.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Topol_info = require("../../model/tufting_infos/Topol_info");

module.exports = {
  GET_TOPOL: async (_, res) => {
    try {
      res.json(
        await Topol_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Topol_info,
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
