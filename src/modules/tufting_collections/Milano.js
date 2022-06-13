const Milano_collection = require("../../model/tufting_collections/Milano.collection");
const { Tufting_comments } = require("../../model/comments/Tufting-comments");

module.exports = {
  GET_MILANO: async (_, res) => {
    try {
      res.json(
        await Milano_collection.findAll({
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
