const Sadaf_collection = require("../../model/tufting_collections/Sadaf.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Sadaf_info = require("../../model/tufting_infos/Sadaf_info");

module.exports = {
  GET_SADAF: async (_, res) => {
    try {
      res.json(
        await Sadaf_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
              {
                model: Sadaf_info,
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
