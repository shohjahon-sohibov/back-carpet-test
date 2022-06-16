const { tuftingCollections } = require("../../model/Tufting-model");
// SIZES MODEL
const Dior_info = require("../../model/tufting_infos/Dior_info");
const Delta_info = require("../../model/tufting_infos/Delta_info");
const Elis_info = require("../../model/tufting_infos/Elis_info");
const Fendi_info = require("../../model/tufting_infos/Fendi_info");
const Fresko_info = require("../../model/tufting_infos/Fresko_info");
const Grafik_info = require("../../model/tufting_infos/Grafik_info");
const Infiniti_info = require("../../model/tufting_infos/Infiniti_info");
const Kobul_info = require("../../model/tufting_infos/Kobul_info");
const Laguna_info = require("../../model/tufting_infos/Laguna_info");
const Lexus_info = require("../../model/tufting_infos/Lexus_info");
const Lufian_info = require("../../model/tufting_infos/Lufian_info");
const Liberti_info = require("../../model/tufting_infos/Liberti_info");
const Mars_info = require("../../model/tufting_infos/Mars_info");
const Milano_info = require("../../model/tufting_infos/Milano_info");
const Platan_info = require("../../model/tufting_infos/Platan_info");
const Radisson_info = require("../../model/tufting_infos/Radisson_info");
const Rodin_info = require("../../model/tufting_infos/Rodin_info");
const Sadaf_info = require("../../model/tufting_infos/Sadaf_info");
const Saturn_info = require("../../model/tufting_infos/Saturn_info");
const Sparta_info = require("../../model/tufting_infos/Sparta_info");
const Vesta_info = require("../../model/tufting_infos/Vesta_info");
const Praga_info = require("../../model/tufting_infos/Praga_info");
const Organ_info = require("../../model/tufting_infos/Organ_info");
const Everest_info = require("../../model/tufting_infos/Everest_info");
const Marsel_info = require("../../model/tufting_infos/Marsel_info");
const Ostin_info = require("../../model/tufting_infos/Ostin_info");
const Meridian_info = require("../../model/tufting_infos/Meridian_info");
const Atlas_info = require("../../model/tufting_infos/Atlas_info");
const Kedr_info = require("../../model/tufting_infos/Kedr_info");
const Eco_info = require("../../model/tufting_infos/Eco_info");
const Venera_info = require("../../model/tufting_infos/Venera_info");
const Topol_info = require("../../model/tufting_infos/Topol_info");
const Edem_info = require("../../model/tufting_infos/Edem_info");
const Perfect_info = require("../../model/tufting_infos/Perfect_info");
const Liber_info = require("../../model/tufting_infos/Liber_info");

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

      const isCollectionFound = await tuftingCollections.findOne({
        where: {
          product_code: collection_infos[0].tufting_id.code,
        },
      });

      if (!isCollectionFound) {
        res.status(404).json("not found");
      } else {
        const collection = collection_infos[0].collection_name.toLowerCase();

        if (collection == "dior") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Dior_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              product_id: arr[0].tufting_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "delta") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Delta_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              product_id: arr[0].tufting_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "elis") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Elis_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              product_id: arr[0].tufting_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "Fendi") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Fendi_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              product_id: arr[0].tufting_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "Fresko") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Fresko_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              product_id: arr[0].tufting_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "grafik") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Grafik_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              product_id: arr[0].tufting_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "infiniti") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Infiniti_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              product_id: arr[0].tufting_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "kobul") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Kobul_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              product_id: arr[0].tufting_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "laguna") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Laguna_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              product_id: arr[0].tufting_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "lexus") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Lexus_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              product_id: arr[0].tufting_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "liberti") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            const newSize = await Liberti_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              product_id: arr[0].tufting_id.id,
              collection_name: arr[0].collection_name,
            });

            if (newSize) {
              res.status(201).json("resource created succsessfully");
            } else {
              res.status(400).json("error in creation");
            }
          });
        } else if (collection == "lufian") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Lufian_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              product_id: arr[0].tufting_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "mars") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Mars_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              product_id: arr[0].tufting_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "milano") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Milano_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              product_id: arr[0].tufting_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "platan") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Platan_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              product_id: arr[0].tufting_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "radisson") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Radisson_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              product_id: arr[0].tufting_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "rodin") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Rodin_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              product_id: arr[0].tufting_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "sadaf") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Sadaf_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              product_id: arr[0].tufting_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "saturn") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Saturn_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              product_id: arr[0].tufting_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "sparta") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Sparta_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              product_id: arr[0].tufting_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "vesta") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Vesta_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              product_id: arr[0].tufting_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "praga") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Praga_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              product_id: arr[0].tufting_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "organ") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Organ_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              product_id: arr[0].tufting_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "everest") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Everest_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              product_id: arr[0].tufting_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "marsel") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Marsel_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              product_id: arr[0].tufting_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "ostin") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Ostin_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              product_id: arr[0].tufting_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "meridian") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Meridian_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              product_id: arr[0].tufting_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "atlas") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Atlas_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              product_id: arr[0].tufting_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "kedr") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Kedr_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              product_id: arr[0].tufting_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "eco") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Eco_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              product_id: arr[0].tufting_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "venera") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Venera_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              product_id: arr[0].tufting_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "topol") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Topol_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              product_id: arr[0].tufting_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "edem") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Edem_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              product_id: arr[0].tufting_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        } else if (collection == "perfect") {
          let count = 0;
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Perfect_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              product_id: arr[0].tufting_id.id,
              collection_name: arr[0].collection_name,
            });
            res.status(201).json("resource created succsessfully");
          });
        } else if (collection == "liber") {
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);

            await Liber_info.create({
              size: arr[0].size,
              price: arr[0].price,
              in_market: arr[0].in_market,
              product_id: arr[0].tufting_id.id,
              collection_name: arr[0].collection_name,
            });
          });
          res.status(201).json("resource created succsessfully");
        }
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  // PUT_COLLECTION_INFO: async (req, res) => {
  //   try {
  //     const { id, size, price, in_market, tuftingCollectionId } = req.body;

  //     const isFound = await Tufting_info.findOne({
  //       where: {
  //         id,
  //       },
  //     });

  //     if (isFound) {
  //       await Tufting_info.update(
  //         {
  //           size,
  //           price,
  //           in_market,
  //           tuftingCollectionId,
  //         },
  //         {
  //           where: {
  //             id,
  //           },
  //         }
  //       );
  //       res.status(200).json("resource updated successfuly");
  //     } else {
  //       res.status(400).json("Not found");
  //     }
  //   } catch (error) {
  //     return res.status(500).json({ error: error.message });
  //   }
  // },
  DELETE_COLLECTION_INFO: async (req, res) => {
    try {
      const { collection_name, collection_infos } = req.body;

      if (!collection_name || !collection_infos) {
        res.status(400).json("key invalid");
      } else {
        const collection = collection_name.toLowerCase();

        if (collection == "dior") {
          let count = 0;
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);
            await Dior_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
            count++;
            if (count == arr.length) {
              res.status(201).json("resource destroyed succsessfully");
            }
          });
        } else if (collection == "delta") {
          let count = 0;
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);
            await Delta_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
            count++;
            if (count == arr.length) {
              res.status(201).json("resource destroyed succsessfully");
            }
          });
        } else if (collection == "elis") {
          let count = 0;
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);
            await Elis_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
            count++;
            if (count == arr.length) {
              res.status(201).json("resource destroyed succsessfully");
            }
          });
        } else if (collection == "Fendi") {
          let count = 0;
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);
            await Fendi_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
            count++;
            if (count == arr.length) {
              res.status(201).json("resource destroyed succsessfully");
            }
          });
        } else if (collection == "Fresko") {
          let count = 0;
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);
            await Fresko_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
            count++;
            if (count == arr.length) {
              res.status(201).json("resource destroyed succsessfully");
            }
          });
        } else if (collection == "grafik") {
          let count = 0;
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);
            await Grafik_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
            count++;
            if (count == arr.length) {
              res.status(201).json("resource destroyed succsessfully");
            }
          });
        } else if (collection == "infiniti") {
          let count = 0;
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);
            await Infiniti_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
            count++;
            if (count == arr.length) {
              res.status(201).json("resource destroyed succsessfully");
            }
          });
        } else if (collection == "kobul") {
          let count = 0;
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);
            await Kobul_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
            count++;
            if (count == arr.length) {
              res.status(201).json("resource destroyed succsessfully");
            }
          });
        } else if (collection == "laguna") {
          let count = 0;
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);
            await Laguna_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
            count++;
            if (count == arr.length) {
              res.status(201).json("resource destroyed succsessfully");
            }
          });
        } else if (collection == "lexus") {
          let count = 0;
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);
            await Lexus_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
            count++;
            if (count == arr.length) {
              res.status(201).json("resource destroyed succsessfully");
            }
          });
        } else if (collection == "liberti") {
          let count = 0;
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);
            await Liberti_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
            count++;
            if (count == arr.length) {
              res.status(201).json("resource destroyed succsessfully");
            }
          });
        } else if (collection == "lufian") {
          let count = 0;
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);
            await Lufian_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
            count++;
            if (count == arr.length) {
              res.status(201).json("resource destroyed succsessfully");
            }
          });
        } else if (collection == "mars") {
          let count = 0;
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);
            await Mars_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
            count++;
            if (count == arr.length) {
              res.status(201).json("resource destroyed succsessfully");
            }
          });
        } else if (collection == "milano") {
          let count = 0;
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);
            await Milano_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
            count++;
            if (count == arr.length) {
              res.status(201).json("resource destroyed succsessfully");
            }
          });
        } else if (collection == "platan") {
          let count = 0;
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);
            await Platan_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
            count++;
            if (count == arr.length) {
              res.status(201).json("resource destroyed succsessfully");
            }
          });
        } else if (collection == "radisson") {
          let count = 0;
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);
            await Radisson_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
            count++;
            if (count == arr.length) {
              res.status(201).json("resource destroyed succsessfully");
            }
          });
        } else if (collection == "rodin") {
          let count = 0;
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);
            await Rodin_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
            count++;
            if (count == arr.length) {
              res.status(201).json("resource destroyed succsessfully");
            }
          });
        } else if (collection == "sadaf") {
          let count = 0;
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);
            await Sadaf_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
            count++;
            if (count == arr.length) {
              res.status(201).json("resource destroyed succsessfully");
            }
          });
        } else if (collection == "saturn") {
          let count = 0;
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);
            await Saturn_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
            count++;
            if (count == arr.length) {
              res.status(201).json("resource destroyed succsessfully");
            }
          });
        } else if (collection == "sparta") {
          let count = 0;
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);
            await Sparta_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
            count++;
            if (count == arr.length) {
              res.status(201).json("resource destroyed succsessfully");
            }
          });
        } else if (collection == "vesta") {
          let count = 0;
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);
            await Vesta_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
            count++;
            if (count == arr.length) {
              res.status(201).json("resource destroyed succsessfully");
            }
          });
        } else if (collection == "praga") {
          let count = 0;
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);
            await Praga_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
            count++;
            if (count == arr.length) {
              res.status(201).json("resource destroyed succsessfully");
            }
          });
        } else if (collection == "organ") {
          let count = 0;
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);
            await Organ_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
            count++;
            if (count == arr.length) {
              res.status(201).json("resource destroyed succsessfully");
            }
          });
        } else if (collection == "everest") {
          let count = 0;
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);
            await Everest_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
            count++;
            if (count == arr.length) {
              res.status(201).json("resource destroyed succsessfully");
            }
          });
        } else if (collection == "marsel") {
          let count = 0;
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);
            await Marsel_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
            count++;
            if (count == arr.length) {
              res.status(201).json("resource destroyed succsessfully");
            }
          });
        } else if (collection == "ostin") {
          let count = 0;
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);
            await Ostin_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
            count++;
            if (count == arr.length) {
              res.status(201).json("resource destroyed succsessfully");
            }
          });
        } else if (collection == "meridian") {
          let count = 0;
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);
            await Meridian_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
            count++;
            if (count == arr.length) {
              res.status(201).json("resource destroyed succsessfully");
            }
          });
        } else if (collection == "atlas") {
          let count = 0;
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);
            await Atlas_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
            count++;
            if (count == arr.length) {
              res.status(201).json("resource destroyed succsessfully");
            }
          });
        } else if (collection == "kedr") {
          let count = 0;
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);
            await Kedr_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
            count++;
            if (count == arr.length) {
              res.status(201).json("resource destroyed succsessfully");
            }
          });
        } else if (collection == "eco") {
          let count = 0;
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);
            await Eco_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
            count++;
            if (count == arr.length) {
              res.status(201).json("resource destroyed succsessfully");
            }
          });
        } else if (collection == "venera") {
          let count = 0;
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);
            await Venera_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
            count++;
            if (count == arr.length) {
              res.status(201).json("resource destroyed succsessfully");
            }
          });
        } else if (collection == "topol") {
          let count = 0;
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);
            await Topol_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
            count++;
            if (count == arr.length) {
              res.status(201).json("resource destroyed succsessfully");
            }
          });
        } else if (collection == "edem") {
          let count = 0;
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);
            await Edem_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
            count++;
            if (count == arr.length) {
              res.status(201).json("resource destroyed succsessfully");
            }
          });
        } else if (collection == "perfect") {
          let count = 0;
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);
            await Perfect_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
            count++;
            if (count == arr.length) {
              res.status(201).json("resource destroyed succsessfully");
            }
          });
        } else if (collection == "liber") {
          let count = 0;
          collection_infos.forEach(async (element) => {
            const arr = [];
            arr.push(element);
            await Liber_info.destroy({
              where: {
                id: arr[0].id,
              },
            });
            count++;
            if (count == arr.length) {
              res.status(201).json("resource destroyed succsessfully");
            }
          });
        }
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
