const { Tresor_collection } = require('../../model/carpet_collections/Tresor.collection')

module.exports = {
    GET_TRESORS: async (_, res) => {
        try {
            res.json(await Tresor_collection.findAll({
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