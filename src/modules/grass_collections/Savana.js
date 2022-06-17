const Savana_collection = require("../../model/grass_collections/Savana.collection");
const { Grass_comments } = require("../../model/comments/Grass-comments");
const Savana_info = require("../../model/grass_infos/Savana_info");

module.exports = {
  GET_SAVANA: async (_, res) => {
    try {
      res.json(
        await Savana_collection.findAll({
          include: [
            {
              model: Grass_comments,
              as: "Grass_comments",
              attributes: ["id", "body", "grass_id"],
            },
            {
              model: Savana_info,
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
