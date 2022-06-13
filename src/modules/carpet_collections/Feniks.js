const {
  Feniks_collection,
} = require("../../model/carpet_collections/Feniks.collection");
const { Carpet_comments } = require("../../model/comments/Carpet-comments");
const Feniks_info = require("../../model/carpet_infos/Feniks_info");

module.exports = {
  GET_FENIKS: async (_, res) => {
    try {
      res.json(
        await Feniks_collection.findAll({
          include: [
            {
              model: Carpet_comments,
              attributes: ["id", "body", "product_id"],
            },
            {
              model: Feniks_info,
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
