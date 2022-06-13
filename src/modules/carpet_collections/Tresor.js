const {
  Tresor_collection,
} = require("../../model/carpet_collections/Tresor.collection");
const { Carpet_comments } = require("../../model/comments/Carpet-comments");
const Tresor_info = require("../../model/carpet_infos/Tresor_info");

module.exports = {
  GET_TRESORS: async (_, res) => {
    try {
      res.json(
        await Tresor_collection.findAll({
          include: [
            {
              model: Carpet_comments,
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Tresor_info,
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
