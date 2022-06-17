const Chelsi_collection = require("../../model/grass_collections/Chelsi.collection");
const { Grass_comments } = require("../../model/comments/Grass-comments");
const Chelsi_info = require("../../model/grass_infos/Chelsi_info");

module.exports = {
  GET_CHELSI: async (_, res) => {
    try {
      res.json(
        await Chelsi_collection.findAll({
          include: [
            {
              model: Grass_comments,
              as: "Grass_comments",
              attributes: ["id", "body", "grass_id"],
            },
            {
              model: Chelsi_info,
              as: "Grass_infos",
              attributes: ["id", "size", "price", "in_market", "grass_id"],
            },
          ],
        })
      );
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  },
};
