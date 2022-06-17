const Mono_collection = require("../../model/grass_collections/Mono.collection");
const { Grass_comments } = require("../../model/comments/Grass-comments");
const Mono_info = require("../../model/grass_infos/Mono_info");

module.exports = {
  GET_MONO: async (_, res) => {
    try {
      res.json(
        await Mono_collection.findAll({
          include: [
            {
              model: Grass_comments,
              as: "Grass_comments",
              attributes: ["id", "body", "grass_id"],
            },
            {
              model: Mono_info,
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
