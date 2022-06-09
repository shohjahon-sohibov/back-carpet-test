const { Hi_Tech_collection } = require('../../model/carpet_collections/Hi-Tech.collection')

module.exports = {
    GET_HI_TECH: async (_, res) => {
        try {
            res.json(await Hi_Tech_collection.findAll({
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