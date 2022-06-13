const {
  Camellia_collection,
} = require("../../model/carpet_collections/Camellia.collection");
const { Carpet_comments } = require("../../model/comments/Carpet-comments");
const Camellia_info = require("../../model/carpet_infos/Camellia_info");

module.exports = {
  GET_CAMELLIA: async (_, res) => {
    try {
      res.json(
        await Camellia_collection.findAll({
          include: [
            {
              model: Carpet_comments,
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Camellia_info,
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
