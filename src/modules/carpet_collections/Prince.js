const { Prince_collection } = require('../../model/Prince.collection');
const { Carpet_info, Carpet_comments } = require('../../model/model')

module.exports = {
    GET_PRINCE: async (_, res) => {
        try {
            res.json(await Prince_collection.findAll({
                include: [
                    {
                      model: Carpet_comments,
                      attributes: ["id", "body", "carpetCollectionId"],
                    },
                    {
                      model: Carpet_info,
                      attributes: [
                        "id",
                        "size",
                        "price",
                        "in_market",
                        "carpetCollectionId",
                      ],
                    },
                  ],
            }))
        } catch (e) {
            console.log(e);
        }
    }
}
