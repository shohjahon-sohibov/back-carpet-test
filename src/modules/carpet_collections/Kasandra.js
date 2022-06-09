const { Kasandra_collection } = require('../../model/carpet_collections/Kasandra.collection')

module.exports = {
    GET_KASANDRA: async (_, res) => {
        try {
            res.json(await Kasandra_collection.findAll({
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