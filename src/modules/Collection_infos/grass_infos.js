const { grassCollections } = require("../../model/Grass-model");
const Arena_info = require("../../model/grass_infos/Arena_info");
const Bahar_info = require("../../model/grass_infos/Bahar_info");
const Chelsi_info = require("../../model/grass_infos/Chelsi_info");
const Fifa_info = require("../../model/grass_infos/Fifa_info");
const Green_info = require("../../model/grass_infos/Green_info");
const Mono_info = require("../../model/grass_infos/Mono_info");
const Savana_info = require("../../model/grass_infos/Savana_info");
const Tarnado_info = require("../../model/grass_infos/Tarnado_info");

module.exports = {
  GET_COLLECTION_INFOS: async (_, res) => {
    try {
      res.status(200).json(await Grass_info.findAll());
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  POST_COLLECTION_INFO: async (req, res) => {
    try {
      const { collection_infos } = req.body;

      if (!collection_infos) {
        res.status(204).json("key invalid");
      } else {
        const isCollectionFound = await grassCollections.findOne({
          where: {
            product_code: collection_infos[0].grass_id.code,
          },
        });

        if (!isCollectionFound) {
          res.status(404).json("not found");
        } else {
          const collection = collection_infos[0].collection_name.toLowerCase();

          if (collection == "fifa") {
            collection_infos.forEach(async (element) => {
              const arr = [];
              arr.push(element);

              await Fifa_info.create({
                size: arr[0].size,
                price: arr[0].price,
                in_market: arr[0].in_market,
                grass_id: arr[0].grass_id.id,
                collection_name: arr[0].collection_name,
              });
            });
            res.status(201).json("resource created succsessfully");
          } else if (collection == "green") {
            collection_infos.forEach(async (element) => {
              const arr = [];
              arr.push(element);

              await Green_info.create({
                size: arr[0].size,
                price: arr[0].price,
                in_market: arr[0].in_market,
                grass_id: arr[0].grass_id.id,
                collection_name: arr[0].collection_name,
              });
            });
            res.status(201).json("resource created succsessfully");
          } else if (collection == "savana") {
            collection_infos.forEach(async (element) => {
              const arr = [];
              arr.push(element);

              await Savana_info.create({
                size: arr[0].size,
                price: arr[0].price,
                in_market: arr[0].in_market,
                grass_id: arr[0].grass_id.id,
                collection_name: arr[0].collection_name,
              });
            });
            res.status(201).json("resource created succsessfully");
          } else if (collection == "mono") {
            collection_infos.forEach(async (element) => {
              const arr = [];
              arr.push(element);

              await Mono_info.create({
                size: arr[0].size,
                price: arr[0].price,
                in_market: arr[0].in_market,
                grass_id: arr[0].grass_id.id,
                collection_name: arr[0].collection_name,
              });
            });
            res.status(201).json("resource created succsessfully");
          } else if (collection == "chelsi") {
            collection_infos.forEach(async (element) => {
              const arr = [];
              arr.push(element);

              await Chelsi_info.create({
                size: arr[0].size,
                price: arr[0].price,
                in_market: arr[0].in_market,
                grass_id: arr[0].grass_id.id,
                collection_name: arr[0].collection_name,
              });
            });
            res.status(201).json("resource created succsessfully");
          } else if (collection == "tarnado") {
            collection_infos.forEach(async (element) => {
              const arr = [];
              arr.push(element);

              await Tarnado_info.create({
                size: arr[0].size,
                price: arr[0].price,
                in_market: arr[0].in_market,
                grass_id: arr[0].grass_id.id,
                collection_name: arr[0].collection_name,
              });
            });
            res.status(201).json("resource created succsessfully");
          } else if (collection == "arena") {
            collection_infos.forEach(async (element) => {
              const arr = [];
              arr.push(element);

              await Arena_info.create({
                size: arr[0].size,
                price: arr[0].price,
                in_market: arr[0].in_market,
                grass_id: arr[0].grass_id.id,
                collection_name: arr[0].collection_name,
              });
            });
            res.status(201).json("resource created succsessfully");
          } else if (collection == "bahar") {
            collection_infos.forEach(async (element) => {
              const arr = [];
              arr.push(element);

              await Bahar_info.create({
                size: arr[0].size,
                price: arr[0].price,
                in_market: arr[0].in_market,
                grass_id: arr[0].grass_id.id,
                collection_name: arr[0].collection_name,
              });
            });
            res.status(201).json("resource created succsessfully");
          }
        }
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  PUT_COLLECTION_INFO: async (req, res) => {
    // try {
    //   const { id, size, price, in_market, tuftingCollectionId } = req.body;
    //   const isFound = await Grass_info.findOne({
    //     where: {
    //       id,
    //     },
    //   });
    //   if (isFound) {
    //     await Grass_info.update(
    //       {
    //         size,
    //         price,
    //         in_market,
    //         tuftingCollectionId,
    //       },
    //       {
    //         where: {
    //           id,
    //         },
    //       }
    //     );
    //     res.status(200).json("resource updated successfuly");
    //   } else {
    //     res.status(400).json("Not found");
    //   }
    // } catch (error) {
    //   return res.status(500).json({ error: error.message });
    // }
  },
  DELETE_COLLECTION_INFO: async (req, res) => {
    try {
      const { collection_name, collection_infos } = req.body;

      if (!collection_name || !collection_infos) {
        res.status(204).json("key invalid");
      } else {
        const collection = collection_name.toLowerCase();

        if (collection == "fifa") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);
            await Fifa_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
          });
          res.status(201).json("resource destroyed succsessfully");
        } else if (collection == "green") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Green_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
          });
          res.status(201).json("resource destroyed succsessfully");
        } else if (collection == "savana") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Savana_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
          });
          res.status(201).json("resource destroyed succsessfully");
        } else if (collection == "mono") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Mono_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
          });
          res.status(201).json("resource destroyed succsessfully");
        } else if (collection == "chelsi") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Chelsi_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
          });
          res.status(201).json("resource destroyed succsessfully");
        } else if (collection == "tarnado") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Tarnado_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
          });
          res.status(201).json("resource destroyed succsessfully");
        } else if (collection == "arena") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Arena_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
          });
          res.status(201).json("resource destroyed succsessfully");
        } else if (collection == "bahar") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Bahar_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
          });
          res.status(201).json("resource destroyed succsessfully");
        }
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
