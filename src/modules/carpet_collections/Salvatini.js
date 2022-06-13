const {
  Salvatini_collection,
} = require("../../model/carpet_collections/Salvatini.collection");
const { Carpet_comments } = require("../../model/comments/Carpet-comments");
const Salvatini_info = require("../../model/carpet_infos/Salvatini_info");

module.exports = {
  GET_SALVATINI: async (_, res) => {
    try {
      res.json(
        await Salvatini_collection.findAll({
          include: [
            {
              model: Carpet_comments,
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Salvatini_info,
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
