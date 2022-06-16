const Platan_collection = require("../../model/tufting_collections/Platan.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Platan_info = require("../../model/tufting_infos/Platan_info");

module.exports = {
  GET_PLATAN: async (_, res) => {
    try {
      res.json(
        await Platan_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
              {
                model: Platan_info,
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
