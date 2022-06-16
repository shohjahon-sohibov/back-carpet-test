const Grafik_collection = require("../../model/tufting_collections/Grafik.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Grafik_info = require("../../model/tufting_infos/Grafik_info");

module.exports = {
  GET_GRAFIK: async (_, res) => {
    try {
      res.json(
        await Grafik_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
              {
                model: Grafik_info,
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
