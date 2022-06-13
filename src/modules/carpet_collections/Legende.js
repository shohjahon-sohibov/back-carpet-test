const {
  Legenda_collection,
} = require("../../model/carpet_collections/Legenda.collection");
const { Carpet_comments } = require("../../model/comments/Carpet-comments");
const Legenda_info = require("../../model/carpet_infos/Legenda_info");

module.exports = {
  GET_LEGENDA: async (_, res) => {
    try {
      res.send(
        await Legenda_collection.findAll({
          include: [
            {
              model: Carpet_comments,
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Legenda_info,
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
