const Delta_collection = require("../../model/tufting_collections/Delta.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Delta_info = require("../../model/tufting_infos/Delta_info");

module.exports = {
  GET_DELTA: async (_, res) => {
    try {
      res.json(
        await Delta_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Delta_info,
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
