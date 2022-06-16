const Atlas_collection = require("../../model/tufting_collections/Atlas.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Atlas_info = require("../../model/tufting_infos/Atlas_info");

module.exports = {
  GET_ATLAS: async (_, res) => {
    try {
      res.json(
        await Atlas_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Atlas_info,
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
