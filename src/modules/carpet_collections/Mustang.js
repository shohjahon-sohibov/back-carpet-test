const {
  Mustang_collection,
} = require("../../model/carpet_collections/Mustang.collection");
const { Carpet_comments } = require("../../model/comments/Carpet-comments");
const Mustang_info = require("../../model/carpet_infos/Mustang_info");

module.exports = {
  GET_MUSTANG: async (_, res) => {
    try {
      res.json(
        await Mustang_collection.findAll({
          include: [
            {
              model: Carpet_comments,
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Mustang_info,
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
