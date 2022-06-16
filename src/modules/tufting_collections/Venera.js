const Venera_collection = require("../../model/tufting_collections/Venera.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Venera_info = require("../../model/tufting_infos/Venera_info");

module.exports = {
  GET_VENERA: async (_, res) => {
    try {
      res.json(
        await Venera_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Venera_info,
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
