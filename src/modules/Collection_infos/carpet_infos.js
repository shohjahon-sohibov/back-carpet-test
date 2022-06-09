const { Carpet_info, carpetCollections } = require("../../model/model");
const Diadema_info = require("../../model/carpet_infos/Diadema_info");
const Dream_info = require("../../model/carpet_infos/Dream_info");
const Adele_info = require("../../model/carpet_infos/Adele_info");
const Artemida_info = require("../../model/carpet_infos/Artemida_info");
const Camaro_info = require("../../model/carpet_infos/Camaro_info");
const Camellia_info = require("../../model/carpet_infos/Camellia_info");
const Feniks_info = require("../../model/carpet_infos/Feniks_info");
const Hermosa_info = require("../../model/carpet_infos/Hermosa_info");
const Hi_tech_info = require("../../model/carpet_infos/Hi-tech_info");
const Kasandra_info = require("../../model/carpet_infos/Kasandra_info");
const Kenzo_info = require("../../model/carpet_infos/Kenzo_info");
const Legenda_info = require("../../model/carpet_infos/Legenda_info");
const Lindo_info = require("../../model/carpet_infos/Lindo_info");
const Millenium_info = require("../../model/carpet_infos/Millenium_info");
const Mustang_info = require("../../model/carpet_infos/Mustang_info");
const Prince_info = require("../../model/carpet_infos/Prince_info");
const Relax_info = require("../../model/carpet_infos/Relax_info");
const Salvatini_info = require("../../model/carpet_infos/Salvatini_info");
const Tresor_info = require("../../model/carpet_infos/Tresor_info");
const Unique_info = require("../../model/carpet_infos/Unique_info");

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

      const isCollectionFound = await carpetCollections.findOne({
        where: {
          product_code: collection_infos[0].carpet_id.code,
        },
      });

      if (isCollectionFound) {
        const collection = collection_infos[0].collection_name.toLowerCase();
        if (collection == "adele") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Adele_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              carpet_id: arr[0].carpet_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "artemida") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Artemida_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              carpet_id: arr[0].carpet_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "camaro") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Camaro_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              carpet_id: arr[0].carpet_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "camellia") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Camellia_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              carpet_id: arr[0].carpet_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "diadema") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Diadema_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              carpet_id: arr[0].carpet_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "dream") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Dream_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              carpet_id: arr[0].carpet_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "feniks") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Feniks_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              carpet_id: arr[0].carpet_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "hermosa") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Hermosa_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              carpet_id: arr[0].carpet_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "hi-tech") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Hi_tech_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              carpet_id: arr[0].carpet_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "kasandra") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Kasandra_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              carpet_id: arr[0].carpet_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "kenzo") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Kenzo_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              carpet_id: arr[0].carpet_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "legenda") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Legenda_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              carpet_id: arr[0].carpet_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "lindo") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Lindo_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              carpet_id: arr[0].carpet_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "millenium") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Millenium_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              carpet_id: arr[0].carpet_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "mustang") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Mustang_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              carpet_id: arr[0].carpet_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "prince") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Prince_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              carpet_id: arr[0].carpet_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "relax") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Relax_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              carpet_id: arr[0].carpet_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "salvatini") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Salvatini_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              carpet_id: arr[0].carpet_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "tresor") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Tresor_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              carpet_id: arr[0].carpet_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "unique") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Unique_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              carpet_id: arr[0].carpet_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        }
      } else {
        console.error("not found");
      }

    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  PUT_COLLECTION_INFO: async (req, res) => {
    try {
      const { id, size, price, in_market, carpet_id } = req.body;

      const isFound = await Carpet_info.findOne({
        where: {
          id,
        },
      });

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
      const { id, info_order } = req.body;
      
      const isFound = await Carpet_info.findOne({
        where: {
          id,
        },
      });

      console.log(info_order[0].collection_name);

      if (collection_name == "adele") {
        collection_infos.forEach(async (element) => {
          const arr = [];
          arr.push(element);

          await Adele_info.destroy({
          where: {
            id:arr[0].id
          }
          });
        });
        res.status(201).json("resource created succsessfully");
      }  else if (collection == "artemida") {
        collection_infos.forEach(async (element) => {
          const arr = [];
          arr.push(element);

          await Artemida_info.destroy({
            where: {
              id:arr[0].id
            }
          });
        });
        res.status(201).json("resource destroyd succsessfully");
      } else if (collection == "camaro") {
        collection_infos.forEach(async (element) => {
          const arr = [];
          arr.push(element);

          await Camaro_info.destroy({
             where: {
            id:arr[0].id
          }
          });
        });
        res.status(201).json("resource destroyd succsessfully");
      } else if (collection == "camellia") {
        collection_infos.forEach(async (element) => {
          const arr = [];
          arr.push(element);

          await Camellia_info.destroy({
             where: {
            id:arr[0].id
          }
          });
        });
        res.status(201).json("resource destroyd succsessfully");
      } else if (collection == "diadema") {
        collection_infos.forEach(async (element) => {
          const arr = [];
          arr.push(element);

          await Diadema_info.destroy({
             where: {
            id:arr[0].id
          }
          });
        });
        res.status(201).json("resource destroyd succsessfully");
      } else if (collection == "dream") {
        collection_infos.forEach(async (element) => {
          const arr = [];
          arr.push(element);

          await Dream_info.destroy({
             where: {
            id:arr[0].id
          }
          });
        });
        res.status(201).json("resource destroyd succsessfully");
      } else if (collection == "feniks") {
        collection_infos.forEach(async (element) => {
          const arr = [];
          arr.push(element);

          await Feniks_info.destroy({
             where: {
            id:arr[0].id
          }
          });
        });
        res.status(201).json("resource destroyd succsessfully");
      } else if (collection == "hermosa") {
        collection_infos.forEach(async (element) => {
          const arr = [];
          arr.push(element);

          await Hermosa_info.destroy({
             where: {
            id:arr[0].id
          }
          });
        });
        res.status(201).json("resource destroyd succsessfully");
      } else if (collection == "hi-tech") {
        collection_infos.forEach(async (element) => {
          const arr = [];
          arr.push(element);

          await Hi_tech_info.destroy({
             where: {
            id:arr[0].id
          }
          });
        });
        res.status(201).json("resource destroyd succsessfully");
      } else if (collection == "kasandra") {
        collection_infos.forEach(async (element) => {
          const arr = [];
          arr.push(element);

          await Kasandra_info.destroy({
             where: {
            id:arr[0].id
          }
          });
        });
        res.status(201).json("resource destroyd succsessfully");
      } else if (collection == "kenzo") {
        collection_infos.forEach(async (element) => {
          const arr = [];
          arr.push(element);

          await Kenzo_info.destroy({
             where: {
            id:arr[0].id
          }
          });
        });
        res.status(201).json("resource destroyd succsessfully");
      } else if (collection == "legenda") {
        collection_infos.forEach(async (element) => {
          const arr = [];
          arr.push(element);

          await Legenda_info.destroy({
             where: {
            id:arr[0].id
          }
          });
        });
        res.status(201).json("resource destroyd succsessfully");
      } else if (collection == "lindo") {
        collection_infos.forEach(async (element) => {
          const arr = [];
          arr.push(element);

          await Lindo_info.destroy({
             where: {
            id:arr[0].id
          }
          });
        });
        res.status(201).json("resource destroyd succsessfully");
      } else if (collection == "millenium") {
        collection_infos.forEach(async (element) => {
          const arr = [];
          arr.push(element);

          await Millenium_info.destroy({
             where: {
            id:arr[0].id
          }
          });
        });
        res.status(201).json("resource destroyd succsessfully");
      } else if (collection == "mustang") {
        collection_infos.forEach(async (element) => {
          const arr = [];
          arr.push(element);

          await Mustang_info.destroy({
             where: {
            id:arr[0].id
          }
          });
        });
        res.status(201).json("resource destroyd succsessfully");
      } else if (collection == "prince") {
        collection_infos.forEach(async (element) => {
          const arr = [];
          arr.push(element);

          await Prince_info.destroy({
             where: {
            id:arr[0].id
          }
          });
        });
        res.status(201).json("resource destroyd succsessfully");
      } else if (collection == "relax") {
        collection_infos.forEach(async (element) => {
          const arr = [];
          arr.push(element);

          await Relax_info.destroy({
             where: {
            id:arr[0].id
          }
          });
        });
        res.status(201).json("resource destroyd succsessfully");
      } else if (collection == "salvatini") {
        collection_infos.forEach(async (element) => {
          const arr = [];
          arr.push(element);

          await Salvatini_info.destroy({
             where: {
            id:arr[0].id
          }
          });
        });
        res.status(201).json("resource destroyd succsessfully");
      } else if (collection == "tresor") {
        collection_infos.forEach(async (element) => {
          const arr = [];
          arr.push(element);

          await Tresor_info.destroy({
             where: {
            id:arr[0].id
          }
          });
        });
        res.status(201).json("resource destroyd succsessfully");
      } else if (collection == "unique") {
        collection_infos.forEach(async (element) => {
          const arr = [];
          arr.push(element);

          await Unique_info.destroy({
             where: {
            id:arr[0].id
          }
          });
        });
        res.status(201).json("resource created succsessfully");
      }

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
