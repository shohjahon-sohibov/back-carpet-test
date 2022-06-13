const {
  Lindo_collection,
} = require("../../model/carpet_collections/Lindo.collection");
const { Carpet_comments } = require("../../model/comments/Carpet-comments");
const Lindo_info = require("../../model/carpet_infos/Lindo_info");

module.exports = {
  GET_LINDO: async (_, res) => {
    try {
      res.json(
        await Lindo_collection.findAll({
          include: [
            {
              model: Carpet_comments,
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Lindo_info,
              as: "carpet_infos",
              attributes: ["id", "size", "price", "in_market", "carpet_id"],
            },
          ],
        })
      );
    } catch (e) {
      console.log(e);
    }
  },
};
