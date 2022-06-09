const { Legenda_collection } = require('../../model/carpet_collections/Legenda.collection')

module.exports = {
    GET_LEGENDA: async (_, res) => {
        try {
            res.send(await Legenda_collection.findAll({
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