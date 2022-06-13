const {
  Camaro_collection,
} = require("../../model/carpet_collections/Camaro.collection");
const { Carpet_comments } = require("../../model/comments/Carpet-comments");
const Camaro_info = require("../../model/carpet_infos/Camaro_info");

module.exports = {
  GET_CAMARO: async (_, res) => {
    try {
      res.json(
        await Camaro_collection.findAll({
          include: [
            {
              model: Carpet_comments,
              attributes: ["id", "body", "carpetCollectionId"],
            },
            {
              model: Camaro_info,
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
