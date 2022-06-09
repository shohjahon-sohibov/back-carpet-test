const { Millenium_collection } = require('../../model/carpet_collections/Millenium.collection')

module.exports = {
    GET_MILLENIUM: async (_, res) => {
        try {
            res.json(await Millenium_collection.findAll({
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
              }))
        } catch (e) {
            console.log(e);
        }
    }
}