const Sparta_collection = require("../../model/tufting_collections/Sparta.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Sparta_info = require("../../model/tufting_infos/Sparta_info");

module.exports = {
  GET_SPARTA: async (_, res) => {
    try {
      res.json(
        await Sparta_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
              {
                model: Sparta_info,
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
