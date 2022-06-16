const Kobul_collection = require("../../model/tufting_collections/Kobul.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Kobul_info = require("../../model/tufting_infos/Kobul_info");

module.exports = {
  GET_KOBUL: async (_, res) => {
    try {
      res.json(
        await Kobul_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
              {
                model: Kobul_info,
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
