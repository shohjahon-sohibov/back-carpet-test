const { Dream_collection } = require("../../model/Dream.collection");
const { Carpet_info, Carpet_comments } = require("../../model/model");

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
              model: Carpet_info,
              attributes: [
                "id",
                "size",
                "price",
                "in_market",
                "carpet_id",
              ],
            },
          ],
        })
      );
    } catch (e) {
      console.log(e);
    }
  },
};
