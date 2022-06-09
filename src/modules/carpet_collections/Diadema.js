const { Diadema_collection } = require('../../model/Diadema.collection')
const { Carpet_info, Carpet_comments } = require("../../model/model");

module.exports = {
    GET_DIADEMA: async (_, res) => {
        try {
            res.json(await Diadema_collection.findAll({
                include: [
                    // {
                    //   model: Carpet_comments,
                    //   attributes: ["id", "body", "carpetCollectionId"],
                    // },
                    {
                      model: Carpet_info,
                      attributes: [
                        "id",
                        "size",
                        "price",
                        "in_market",
                        "diadema_id",
                      ],
                    },
                  ],
            }))
        } catch (e) {
            console.log(e);
        }
    }
}
