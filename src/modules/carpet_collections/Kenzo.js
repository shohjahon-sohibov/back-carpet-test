const {
  Kenzo_collection,
} = require("../../model/carpet_collections/Kenzo.collection");
const { Carpet_comments } = require("../../model/comments/Carpet-comments");
const Kenzo_info = require("../../model/carpet_infos/Kenzo_info");

module.exports = {
  GET_KENZO: async (_, res) => {
    try {
      res.json(
        await Kenzo_collection.findAll({
          include: [
            {
              model: Carpet_comments,
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Kenzo_info,
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
