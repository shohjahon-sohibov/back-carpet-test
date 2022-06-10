const Lexus_collection = require("../../model/tufting_collections/Lexus.collection");
const { Tufting_comments } = require("../../model/model");

module.exports = {
  GET_LEXUS: async (_, res) => {
    try {
      res.json(
        await Lexus_collection.findAll({
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
