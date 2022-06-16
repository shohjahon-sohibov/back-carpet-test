const Edem_collection = require("../../model/tufting_collections/Edem.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Edem_info = require("../../model/tufting_infos/Edem_info");

module.exports = {
  GET_EDEM: async (_, res) => {
    try {
      res.json(
        await Edem_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Edem_info,
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
