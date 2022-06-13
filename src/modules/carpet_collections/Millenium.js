const {
  Millenium_collection,
} = require("../../model/carpet_collections/Millenium.collection");
const { Carpet_comments } = require("../../model/comments/Carpet-comments");
const Millenium_info = require("../../model/carpet_infos/Millenium_info");

module.exports = {
  GET_MILLENIUM: async (_, res) => {
    try {
      res.json(
        await Millenium_collection.findAll({
          include: [
            {
              model: Carpet_comments,
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Millenium_info,
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
