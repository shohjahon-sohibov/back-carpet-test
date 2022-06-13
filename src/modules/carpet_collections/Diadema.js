const {
  Diadema_collection,
} = require("../../model/carpet_collections/Diadema.collection");
const { Carpet_comments } = require("../../model/comments/Carpet-comments");
const Diadema_info = require("../../model/carpet_infos/Diadema_info");

module.exports = {
  GET_DIADEMA: async (_, res) => {
    try {
      res.json(
        await Diadema_collection.findAll({
          include: [
            {
              model: Carpet_comments,
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Diadema_info,
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
