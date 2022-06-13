const {
  Prince_collection,
} = require("../../model/carpet_collections/Prince.collection");
const { Carpet_comments } = require("../../model/comments/Carpet-comments");
const Prince_info = require("../../model/carpet_infos/Prince_info");

module.exports = {
  GET_PRINCE: async (_, res) => {
    try {
      res.json(
        await Prince_collection.findAll({
          include: [
            {
              model: Carpet_comments,
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Prince_info,
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
