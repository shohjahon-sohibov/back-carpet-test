const Mars_collection = require("../../model/tufting_collections/Mars.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");
const Mars_info = require("../../model/tufting_infos/Mars_info");

module.exports = {
  GET_MARS: async (_, res) => {
    try {
      res.json(
        await Mars_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
              {
                model: Mars_info,
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
