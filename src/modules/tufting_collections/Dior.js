const Dior_collection = require("../../model/tufting_collections/Dior.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");

module.exports = {
  GET_DIOR: async (_, res) => {
    try {
      res.json(
        await Dior_collection.findAll({
          include: [
            {
              model: Tufting_comments,
              as: "tufting_comments",
              attributes: ["id", "body", "product_id"],
            },
            //   {
            //     model: Dream_infos,
            //     as: "carpet_infos",
            //     attributes: ["id", "size", "price", "in_market", "carpet_id"],
            //   },
          ],
        })
      );
    } catch (e) {
      console.log(e);
    }
  },
};
