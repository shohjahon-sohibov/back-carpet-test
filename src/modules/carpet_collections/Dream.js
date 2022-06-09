const { Dream_collection } = require("../../model/carpet_collections/Dream.collection");
// const { Carpet_info, Carpet_comments } = require("../../model/model");
const Dream_infos = require("../../model/carpet_infos/Dream_info");

module.exports = {
  GET_DREAM: async (_, res) => {
    try {
      res.json(
        await Dream_collection.findAll({
          include: [
            // {
            //   model: Carpet_comments,
            //   attributes: ["id", "body", "carpetCollectionId"],
            // },
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
