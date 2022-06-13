const {
  Adele_collection,
} = require("../../model/carpet_collections/Adele.collection");
const { Carpet_comments } = require("../../model/comments/Carpet-comments");
const Adele_infos = require("../../model/carpet_infos/Adele_info");

module.exports = {
  GET_ADELE: async (_, res) => {
    try {
      res.json(
        await Adele_collection.findAll({
          include: [
            {
              model: Carpet_comments,
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Adele_infos,
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
