const Radisson_collection = require("../../model/tufting_collections/Radisson.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Radisson_info = require("../../model/tufting_infos/Radisson_info");

module.exports = {
  GET_RADISSON: async (_, res) => {
    try {
      res.json(
        await Radisson_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
              {
                model: Radisson_info,
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
