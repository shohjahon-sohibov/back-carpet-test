const { Tufting_info, tuftingCollections } = require("../../model/model");

module.exports = {
  GET_COLLECTION_INFOS: async (_, res) => {
    try {
      res.status(200).json(await Tufting_info.findAll());
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  POST_COLLECTION_INFO: async (req, res) => {
    try {
      const { collection_infos } = req.body;



      collection_infos.forEach(async (element) => {
        const arr = []
        arr.push(element)

        const isCollectionFound = await  tuftingCollections.findOne({
          where: {
            id: arr[0].tuftingCollectionId
          }
        })

        if(isCollectionFound) {

          await Tufting_info.create({
            size: arr[0].size,
            price: arr[0].price,
            in_market: arr[0].in_market,
            tuftingCollectionId: arr[0].tuftingCollectionId,
          });
        } else {
          console.error("not found")
        }

      });

      res.status(201).json("resource created succsessfully");
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  PUT_COLLECTION_INFO: async (req, res) => {
    try {

      const { id, size, price, in_market, tuftingCollectionId } = req.body;
      
      
      const isFound = await Tufting_info.findOne({
        where: {
          id
        }
      })

      if (isFound) {
        await Tufting_info.update(
          {
            size,
            price,
            in_market,
            tuftingCollectionId,
          },
          {
            where: {
              id,
            },
          }
        );
        res.status(200).json("resource updated successfuly");
      } else {
        res.status(400).json("Not found");
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  DELETE_COLLECTION_INFO: async (req, res) => {
    try {
      const { id } = req.body;

      const isFound = await Tufting_info.findOne({
        where: {
          id
        }
      })

      if (isFound) {
        await Tufting_info.destroy({
          where: {
            id,
          },
        });
        res.status(200).json("resource deleted successfuly");
      } else {
        res.status(400).json("not found");
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
