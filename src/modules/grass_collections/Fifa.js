const Fifa_collection = require("../../model/grass_collections/Fifa.collection");
const { Grass_comments } = require("../../model/comments/Grass-comments");
const Fifa_info = require("../../model/grass_infos/Fifa_info");

module.exports = {
  GET_FIFA: async (_, res) => {
    try {
      res.json(
        await Fifa_collection.findAll({
          include: [
            {
              model: Grass_comments,
              as: "Grass_comments",
              attributes: ["id", "body", "grass_id"],
            },
            {
              model: Fifa_info,
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
