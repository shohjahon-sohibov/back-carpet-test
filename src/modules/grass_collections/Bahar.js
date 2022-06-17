const Bahar_collection = require("../../model/grass_collections/Bahar.collection");
const { Grass_comments } = require("../../model/comments/Grass-comments");
const Bahar_info = require("../../model/grass_infos/Bahar_info");

module.exports = {
  GET_BAHAR: async (_, res) => {
    try {
      res.json(
        await Bahar_collection.findAll({
          include: [
            {
              model: Grass_comments,
              as: "Grass_comments",
              attributes: ["id", "body", "grass_id"],
            },
            {
              model: Bahar_info,
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
