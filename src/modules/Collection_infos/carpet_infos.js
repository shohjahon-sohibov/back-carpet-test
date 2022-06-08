const { Carpet_info, carpetCollections} = require("../../model/model");

module.exports = {
  GET_COLLECTION_INFOS: async (_, res) => {
    try {
      res.status(200).json(await Carpet_info.findAll());  
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  POST_COLLECTION_INFO: async (req, res) => {
    try {
      const { collection_infos } = req.body;

      const array = []

      array.push(collection_infos)

      console.log("collection_infos", array[0].carpet_id.code);

      collection_infos.forEach(async (element) => {
        const arr = []
        arr.push(element)

        const isCollectionFound = await carpetCollections.findOne({
          where: {
            product_code: arr[0].carpet_id.code
          }
        })

        console.log(arr);

        if(isCollectionFound) {
          await Carpet_info.create({
            size: arr[0].size,
            price: arr[0].price,
            in_market: arr[0].in_market,
            carpet_id: arr[0].carpet_id,
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

      const { id, size, price, in_market, carpet_id } = req.body;
      
      const isFound = await Carpet_info.findOne({
        where: {
          id
        }
      })

      if (isFound) {
        await Carpet_info.update(
          {
            size,
            price,
            in_market,
            carpet_id,
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

      const isFound = await Carpet_info.findOne({
        where: {
          id
        }
      })

      if (isFound) {
        await Carpet_info.destroy({
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
