const Liberti_collection = require("../../model/tufting_collections/Liberti.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Liberti_info = require("../../model/tufting_infos/Liberti_info");

module.exports = {
  GET_LIBERTI: async (_, res) => {
    try {
      res.json(
        await Liberti_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
              {
                model: Liberti_info,
                as: "tufting_infos",
                attributes: ["id", "size", "price", "in_market", "prouct_id"],
              },
          ],
        })
      );
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  },
};
