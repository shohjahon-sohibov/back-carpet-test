const Infiniti_collection = require("../../model/tufting_collections/Infiniti.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Infiniti_info = require("../../model/tufting_infos/Infiniti_info");

module.exports = {
  GET_INFINITI: async (_, res) => {
    try {
      res.json(
        await Infiniti_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
              {
                model: Infiniti_info,
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
