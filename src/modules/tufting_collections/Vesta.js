const Vesta_collection = require("../../model/tufting_collections/Vesta.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Vesta_info = require("../../model/tufting_infos/Vesta_info");

module.exports = {
  GET_VESTA: async (_, res) => {
    try {
      res.json(
        await Vesta_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
              {
                model: Vesta_info,
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
