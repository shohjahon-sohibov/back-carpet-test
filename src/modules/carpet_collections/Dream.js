const {
  Dream_collection,
} = require("../../model/carpet_collections/Dream.collection");
const { Carpet_comments } = require("../../model/comments/Carpet-comments");
const Dream_infos = require("../../model/carpet_infos/Dream_info");

module.exports = {
  GET_DREAM: async (_, res) => {
    try {
      res.json(
        await Dream_collection.findAll({
          include: [
            {
              model: Carpet_comments,
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Dream_infos,
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
