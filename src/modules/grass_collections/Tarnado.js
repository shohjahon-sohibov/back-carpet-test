const Tarnado_collection = require("../../model/grass_collections/Tarnado.collection");
const { Grass_comments } = require("../../model/comments/Grass-comments");
const Tarnado_info = require("../../model/grass_infos/Tarnado_info");

module.exports = {
  GET_TARNADO: async (_, res) => {
    try {
      res.json(
        await Tarnado_collection.findAll({
          include: [
            {
              model: Grass_comments,
              as: "Grass_comments",
              attributes: ["id", "body", "grass_id"],
            },
            {
              model: Tarnado_info,
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
