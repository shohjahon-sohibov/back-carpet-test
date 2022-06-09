const { Diadema_collection } = require("../../model/carpet_collections/Diadema.collection");
// const { Carpet_info, Carpet_comments } = require("../../model/model");
const Diadema_info = require("../../model/carpet_infos/Diadema_info");

module.exports = {
  GET_DIADEMA: async (_, res) => {
    try {
      res.json(
        await Diadema_collection.findAll({
          include: [
            // {
            //   model: Carpet_comments,
            //   attributes: ["id", "body", "carpetCollectionId"],
            // },
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
