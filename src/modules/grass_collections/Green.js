const Green_collection = require("../../model/grass_collections/Green.collection");
const { Grass_comments } = require("../../model/comments/Grass-comments");
const Green_info = require("../../model/grass_infos/Green_info");

module.exports = {
  GET_GREEN: async (_, res) => {
    try {
      res.json(
        await Green_collection.findAll({
          include: [
            {
              model: Grass_comments,
              as: "Grass_comments",
              attributes: ["id", "body", "grass_id"],
            },
            {
              model: Green_info,
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
