const { Adele_collection } = require('../../model/carpet_collections/Adele.collection')

module.exports = {
    GET_ADELE: async (_, res) => {
        try {
            res.json(await Adele_collection.findAll({
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