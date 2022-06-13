const {
  Unique_collection,
} = require("../../model/carpet_collections/Unique.collection");
const { Carpet_comments } = require("../../model/comments/Carpet-comments");
const Unique_info = require("../../model/carpet_infos/Unique_info");

module.exports = {
  GET_UNIQUE: async (_, res) => {
    try {
      res.json(
        await Unique_collection.findAll({
          include: [
            {
              model: Carpet_comments,
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Unique_info,
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
