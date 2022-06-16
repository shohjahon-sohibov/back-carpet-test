const Fresko_collection = require("../../model/tufting_collections/Fresko.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Fresko_info = require("../../model/tufting_infos/Fresko_info");

module.exports = {
  GET_FRESKO: async (_, res) => {
    try {
      res.json(
        await Fresko_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Fresko_info,
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
