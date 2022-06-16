const Fendi_collection = require("../../model/tufting_collections/Fendi.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Fendi_info = require("../../model/tufting_infos/Fendi_info");

module.exports = {
  GET_FENDI: async (_, res) => {
    try {
      res.json(
        await Fendi_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Fendi_info,
              as: "tufting_infos",
              attributes: ["id", "size", "price", "in_market", "product_id"],
            },
          ],
        })
      );
    } catch (e) {
      console.log(e);
    }
  },
};
