const {
  Kasandra_collection,
} = require("../../model/carpet_collections/Kasandra.collection");
const { Carpet_comments } = require("../../model/comments/Carpet-comments");
const Kasandra_info = require("../../model/carpet_infos/Kasandra_info");

module.exports = {
  GET_KASANDRA: async (_, res) => {
    try {
      res.json(
        await Kasandra_collection.findAll({
          include: [
            {
              model: Carpet_comments,
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Kasandra_info,
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
