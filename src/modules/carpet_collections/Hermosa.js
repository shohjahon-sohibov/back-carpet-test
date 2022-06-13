const {
  Hermosa_collection,
} = require("../../model/carpet_collections/Hermosa.collection");
const { Carpet_comments } = require("../../model/comments/Carpet-comments");
const Hermosa_info = require("../../model/carpet_infos/Hermosa_info");

module.exports = {
  GET_HERMOSA: async (_, res) => {
    try {
      res.json(
        await Hermosa_collection.findAll({
          include: [
            {
              model: Carpet_comments,
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Hermosa_info,
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
