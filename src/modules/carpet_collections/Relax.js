const {
  Relax_collection,
} = require("../../model/carpet_collections/Relax.collection");
const { Carpet_comments } = require("../../model/comments/Carpet-comments");
const Relax_info = require("../../model/carpet_infos/Relax_info");

module.exports = {
  GET_RELAXES: async (_, res) => {
    try {
      res.json(
        await Relax_collection.findAll({
          include: [
            {
              model: Carpet_comments,
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Relax_info,
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
