const {
  Artemida_collection,
} = require("../../model/carpet_collections/Artemida.collection");
const { Carpet_comments } = require("../../model/comments/Carpet-comments");
const Artemida_info = require("../../model/carpet_infos/Artemida_info");

module.exports = {
  GET_ARTEMIDA: async (_, res) => {
    try {
      res.json(
        await Artemida_collection.findAll({
          include: [
            {
              model: Carpet_comments,
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Artemida_info,
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
