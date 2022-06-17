const { SERVERLINK } = require("../../config");
const fs = require("fs");
const path = require("path");

const { carpetCollections } = require("../../model/Carpet-model");
const {
  Adele_collection,
} = require("../../model/carpet_collections/Adele.collection");
const {
  Relax_collection,
} = require("../../model/carpet_collections/Relax.collection");
const {
  Tresor_collection,
} = require("../../model/carpet_collections/Tresor.collection");
const {
  Unique_collection,
} = require("../../model/carpet_collections/Unique.collection");
const {
  Prince_collection,
} = require("../../model/carpet_collections/Prince.collection");
const {
  Mustang_collection,
} = require("../../model/carpet_collections/Mustang.collection");
const {
  Millenium_collection,
} = require("../../model/carpet_collections/Millenium.collection");
const {
  Lindo_collection,
} = require("../../model/carpet_collections/Lindo.collection");
const {
  Legenda_collection,
} = require("../../model/carpet_collections/Legenda.collection");
const {
  Kenzo_collection,
} = require("../../model/carpet_collections/Kenzo.collection");
const {
  Kasandra_collection,
} = require("../../model/carpet_collections/Kasandra.collection");
const {
  Hi_Tech_collection,
} = require("../../model/carpet_collections/Hi-Tech.collection");
const {
  Hermosa_collection,
} = require("../../model/carpet_collections/Hermosa.collection");
const {
  Feniks_collection,
} = require("../../model/carpet_collections/Feniks.collection");
const {
  Dream_collection,
} = require("../../model/carpet_collections/Dream.collection");
const {
  Diadema_collection,
} = require("../../model/carpet_collections/Diadema.collection");
const {
  Camellia_collection,
} = require("../../model/carpet_collections/Camellia.collection");
const {
  Camaro_collection,
} = require("../../model/carpet_collections/Camaro.collection");
const {
  Artemida_collection,
} = require("../../model/carpet_collections/Artemida.collection");
const {
  Salvatini_collection,
} = require("../../model/carpet_collections/Salvatini.collection");

module.exports = {
  GET_CARPETS: async (_, res) => {
    try {
      res.status(200).json(await carpetCollections.findAll());
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  POST_COLLECTION: async (req, res) => {
    try {
      const {
        description,
        like,
        dislike,
        rating,
        sell,
        isNew,
        isTop,
        product_code,
        collection_name,
        in_market,
      } = req.body;

      let imagesArr = [];
      const file = req.file;
      const imgUrl = `${SERVERLINK}public/uploads/carpet_collections/${file.originalname}`;
      imagesArr.push(imgUrl);
      const [poster] = imagesArr;

      if (
        !description ||
        !in_market ||
        !like ||
        !dislike ||
        !rating ||
        !sell ||
        !isNew ||
        !isTop ||
        !product_code ||
        !collection_name
      ) {
        res.status(400).json("key invalid");
      } else {
        await carpetCollections.create({
          description,
          like,
          dislike,
          rating,
          sell,
          isNew,
          isTop,
          product_code,
          collection_name,
          in_market,
          imageUrl: poster,
          imageName: file.originalname,
          imageType: file.mimetype,
        });

        const collectionName = collection_name.toLowerCase();
        if (collectionName == "relax") {
          const newCarpet = await Relax_collection.create({
            description,
            like,
            dislike,
            rating,
            sell,
            isNew,
            isTop,
            product_code,
            collection_name,
            in_market,
            imageUrl: poster,
            imageName: file.originalname,
            imageType: file.mimetype,
          });

          res.status(201).json({
            id: newCarpet.carpet_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collectionName == "adele") {
          const newCarpet = await Adele_collection.create({
            description,
            like,
            dislike,
            rating,
            sell,
            isNew,
            isTop,
            product_code,
            collection_name,
            in_market,
            imageUrl: poster,
            imageName: file.originalname,
            imageType: file.mimetype,
          });

          res.status(201).json({
            id: newCarpet.carpet_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collectionName == "tresor") {
          const newCarpet = await Tresor_collection.create({
            description,
            like,
            dislike,
            rating,
            sell,
            isNew,
            isTop,
            product_code,
            collection_name,
            in_market,
            imageUrl: poster,
            imageName: file.originalname,
            imageType: file.mimetype,
          });

          res.status(201).json({
            id: newCarpet.carpet_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collectionName == "salvatini") {
          const newCarpet = await Salvatini_collection.create({
            description,
            like,
            dislike,
            rating,
            sell,
            isNew,
            isTop,
            product_code,
            collection_name,
            in_market,
            imageUrl: poster,
            imageName: file.originalname,
            imageType: file.mimetype,
          });

          res.status(201).json({
            id: newCarpet.carpet_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collectionName == "unique") {
          const newCarpet = await Unique_collection.create({
            description,
            like,
            dislike,
            rating,
            sell,
            isNew,
            isTop,
            product_code,
            collection_name,
            in_market,
            imageUrl: poster,
            imageName: file.originalname,
            imageType: file.mimetype,
          });

          res.status(201).json({
            id: newCarpet.carpet_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collectionName == "prince") {
          const newCarpet = await Prince_collection.create({
            description,
            like,
            dislike,
            rating,
            sell,
            isNew,
            isTop,
            product_code,
            collection_name,
            in_market,
            imageUrl: poster,
            imageName: file.originalname,
            imageType: file.mimetype,
          });

          res.status(201).json({
            id: newCarpet.carpet_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collectionName == "mustang") {
          const newCarpet = await Mustang_collection.create({
            description,
            like,
            dislike,
            rating,
            sell,
            isNew,
            isTop,
            product_code,
            collection_name,
            in_market,
            imageUrl: poster,
            imageName: file.originalname,
            imageType: file.mimetype,
          });

          res.status(201).json({
            id: newCarpet.carpet_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collectionName == "millenium") {
          const newCarpet = await Millenium_collection.create({
            description,
            like,
            dislike,
            rating,
            sell,
            isNew,
            isTop,
            product_code,
            collection_name,
            in_market,
            imageUrl: poster,
            imageName: file.originalname,
            imageType: file.mimetype,
          });

          res.status(201).json({
            id: newCarpet.carpet_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collectionName == "lindo") {
          const newCarpet = await Lindo_collection.create({
            description,
            like,
            dislike,
            rating,
            sell,
            isNew,
            isTop,
            product_code,
            collection_name,
            in_market,
            imageUrl: poster,
            imageName: file.originalname,
            imageType: file.mimetype,
          });

          res.status(201).json({
            id: newCarpet.carpet_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collectionName == "legenda") {
          const newCarpet = await Legenda_collection.create({
            description,
            like,
            dislike,
            rating,
            sell,
            isNew,
            isTop,
            product_code,
            collection_name,
            in_market,
            imageUrl: poster,
            imageName: file.originalname,
            imageType: file.mimetype,
          });

          res.status(201).json({
            id: newCarpet.carpet_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collectionName == "kenzo") {
          const newCarpet = await Kenzo_collection.create({
            description,
            like,
            dislike,
            rating,
            sell,
            isNew,
            isTop,
            product_code,
            collection_name,
            in_market,
            imageUrl: poster,
            imageName: file.originalname,
            imageType: file.mimetype,
          });

          res.status(201).json({
            id: newCarpet.carpet_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collectionName == "kasandra") {
          const newCarpet = await Kasandra_collection.create({
            description,
            like,
            dislike,
            rating,
            sell,
            isNew,
            isTop,
            product_code,
            collection_name,
            in_market,
            imageUrl: poster,
            imageName: file.originalname,
            imageType: file.mimetype,
          });

          res.status(201).json({
            id: newCarpet.carpet_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collectionName == "hi-tech") {
          const newCarpet = await Hi_Tech_collection.create({
            description,
            like,
            dislike,
            rating,
            sell,
            isNew,
            isTop,
            product_code,
            collection_name,
            in_market,
            imageUrl: poster,
            imageName: file.originalname,
            imageType: file.mimetype,
          });

          res.status(201).json({
            id: newCarpet.carpet_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collectionName == "hermosa") {
          const newCarpet = await Hermosa_collection.create({
            description,
            like,
            dislike,
            rating,
            sell,
            isNew,
            isTop,
            product_code,
            collection_name,
            in_market,
            imageUrl: poster,
            imageName: file.originalname,
            imageType: file.mimetype,
          });

          res.status(201).json({
            id: newCarpet.carpet_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collectionName == "feniks") {
          const newCarpet = await Feniks_collection.create({
            description,
            like,
            dislike,
            rating,
            sell,
            isNew,
            isTop,
            product_code,
            collection_name,
            in_market,
            imageUrl: poster,
            imageName: file.originalname,
            imageType: file.mimetype,
          });

          res.status(201).json({
            id: newCarpet.carpet_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collectionName == "dream") {
          const newCarpet = await Dream_collection.create({
            description,
            like,
            dislike,
            rating,
            sell,
            isNew,
            isTop,
            product_code,
            collection_name,
            in_market,
            imageUrl: poster,
            imageName: file.originalname,
            imageType: file.mimetype,
          });
          res.status(201).json({
            id: newCarpet.carpet_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collectionName == "diadema") {
          const newCarpet = await Diadema_collection.create({
            description,
            like,
            dislike,
            rating,
            sell,
            isNew,
            isTop,
            product_code,
            collection_name,
            in_market,
            imageUrl: poster,
            imageName: file.originalname,
            imageType: file.mimetype,
          });
          res.status(201).json({
            id: newCarpet.carpet_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collectionName == "camellia") {
          const newCarpet = await Camellia_collection.create({
            description,
            like,
            dislike,
            rating,
            sell,
            isNew,
            isTop,
            product_code,
            collection_name,
            in_market,
            imageUrl: poster,
            imageName: file.originalname,
            imageType: file.mimetype,
          });

          res.status(201).json({
            id: newCarpet.carpet_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collectionName == "camaro") {
          const newCarpet = await Camaro_collection.create({
            description,
            like,
            dislike,
            rating,
            sell,
            isNew,
            isTop,
            product_code,
            collection_name,
            in_market,
            imageUrl: poster,
            imageName: file.originalname,
            imageType: file.mimetype,
          });

          res.status(201).json({
            id: newCarpet.carpet_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collectionName == "artemida") {
          const newCarpet = await Artemida_collection.create({
            description,
            like,
            dislike,
            rating,
            sell,
            isNew,
            isTop,
            product_code,
            collection_name,
            in_market,
            imageUrl: poster,
            imageName: file.originalname,
            imageType: file.mimetype,
          });

          res.status(201).json({
            id: newCarpet.carpet_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else {
          res.status(400).json("collection not found");
        }
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  UPDATE_COLLECTION: async (req, res) => {
    try {
      const {
        id,
        description,
        like,
        dislike,
        rating,
        sell,
        isNew,
        isTop,
        product_code,
        collection_name,
        in_market,
      } = req.body;

      if (
        !description ||
        !in_market ||
        !like ||
        !dislike ||
        !rating ||
        !sell ||
        !isNew ||
        !isTop ||
        !product_code ||
        !collection_name
      ) {
        res.status(400).json("key invalid");
      } else {
        const findCollectionId = await carpetCollections.findOne({
          where: {
            product_code,
          },
        });

        let imagesArr = [];
        const file = req.file;
        const imgUrl = `${SERVERLINK}public/uploads/carpet_collections/${file.originalname}`;
        imagesArr.push(imgUrl);
        const [poster] = imagesArr;

        if (findCollectionId.imageName != file.originalname) {
          fs.unlinkSync(
            path.resolve(
              __dirname,
              `../../../public/uploads/carpet_collections/${findCollectionId.imageName}`
            ),
            (error) => {
              res.status(500).json({ error: error.message });
            }
          );
        }

        await carpetCollections.update(
          {
            description,
            like,
            dislike,
            rating,
            sell,
            isNew,
            isTop,
            product_code,
            collection_name,
            in_market,
            imageUrl: poster,
            imageName: file.originalname,
            imageType: file.mimetype,
          },
          {
            where: {
              carpet_id: id,
            },
          }
        );

        const collectionName = collection_name.toLowerCase();

        if (collectionName == "relax") {
          await Relax_collection.update(
            {
              description,
              like,
              dislike,
              rating,
              sell,
              isNew,
              isTop,
              product_code,
              collection_name,
              in_market,
              imageUrl: poster,
              imageName: file.originalname,
              imageType: file.mimetype,
            },
            {
              where: {
                carpet_id: id,
              },
            }
          );

          res.status(201).json("updated resource successfuly");
        } else if (collectionName == "adele") {
          await Adele_collection.update(
            {
              description,
              like,
              dislike,
              rating,
              sell,
              isNew,
              isTop,
              product_code,
              collection_name,
              in_market,
              imageUrl: poster,
              imageName: file.originalname,
              imageType: file.mimetype,
            },
            {
              where: {
                carpet_id: id,
              },
            }
          );

          res.status(201).json("updated resource successfuly");
        } else if (collectionName == "tresor") {
          await Tresor_collection.update(
            {
              description,
              like,
              dislike,
              rating,
              sell,
              isNew,
              isTop,
              product_code,
              collection_name,
              in_market,
              imageUrl: poster,
              imageName: file.originalname,
              imageType: file.mimetype,
            },
            {
              where: {
                carpet_id: id,
              },
            }
          );

          res.status(201).json("updated resource successfuly");
        } else if (collectionName == "salvatini") {
          await Salvatini_collection.update(
            {
              description,
              like,
              dislike,
              rating,
              sell,
              isNew,
              isTop,
              product_code,
              collection_name,
              in_market,
              imageUrl: poster,
              imageName: file.originalname,
              imageType: file.mimetype,
            },
            {
              where: {
                carpet_id: id,
              },
            }
          );

          res.status(201).json("updated resource successfuly");
        } else if (collectionName == "unique") {
          await Unique_collection.update(
            {
              description,
              like,
              dislike,
              rating,
              sell,
              isNew,
              isTop,
              product_code,
              collection_name,
              in_market,
              imageUrl: poster,
              imageName: file.originalname,
              imageType: file.mimetype,
            },
            {
              where: {
                carpet_id: id,
              },
            }
          );

          res.status(201).json("updated resource successfuly");
        } else if (collectionName == "prince") {
          await Prince_collection.update(
            {
              description,
              like,
              dislike,
              rating,
              sell,
              isNew,
              isTop,
              product_code,
              collection_name,
              in_market,
              imageUrl: poster,
              imageName: file.originalname,
              imageType: file.mimetype,
            },
            {
              where: {
                carpet_id: id,
              },
            }
          );

          res.status(201).json("updated resource successfuly");
        } else if (collectionName == "mustang") {
          await Mustang_collection.update(
            {
              description,
              like,
              dislike,
              rating,
              sell,
              isNew,
              isTop,
              product_code,
              collection_name,
              in_market,
              imageUrl: poster,
              imageName: file.originalname,
              imageType: file.mimetype,
            },
            {
              where: {
                carpet_id: id,
              },
            }
          );

          res.status(201).json("updated resource successfuly");
        } else if (collectionName == "millenium") {
          await Millenium_collection.update(
            {
              description,
              like,
              dislike,
              rating,
              sell,
              isNew,
              isTop,
              product_code,
              collection_name,
              in_market,
              imageUrl: poster,
              imageName: file.originalname,
              imageType: file.mimetype,
            },
            {
              where: {
                carpet_id: id,
              },
            }
          );

          res.status(201).json("updated resource successfuly");
        } else if (collectionName == "lindo") {
          await Lindo_collection.update(
            {
              description,
              like,
              dislike,
              rating,
              sell,
              isNew,
              isTop,
              product_code,
              collection_name,
              in_market,
              imageUrl: poster,
              imageName: file.originalname,
              imageType: file.mimetype,
            },
            {
              where: {
                carpet_id: id,
              },
            }
          );

          res.status(201).json("updated resource successfuly");
        } else if (collectionName == "legenda") {
          await Legenda_collection.update(
            {
              description,
              like,
              dislike,
              rating,
              sell,
              isNew,
              isTop,
              product_code,
              collection_name,
              in_market,
              imageUrl: poster,
              imageName: file.originalname,
              imageType: file.mimetype,
            },
            {
              where: {
                carpet_id: id,
              },
            }
          );

          res.status(201).json("updated resource successfuly");
        } else if (collectionName == "kenzo") {
          await Kenzo_collection.update(
            {
              description,
              like,
              dislike,
              rating,
              sell,
              isNew,
              isTop,
              product_code,
              collection_name,
              in_market,
              imageUrl: poster,
              imageName: file.originalname,
              imageType: file.mimetype,
            },
            {
              where: {
                carpet_id: id,
              },
            }
          );

          res.status(201).json("updated resource successfuly");
        } else if (collectionName == "kasandra") {
          await Kasandra_collection.update(
            {
              description,
              like,
              dislike,
              rating,
              sell,
              isNew,
              isTop,
              product_code,
              collection_name,
              in_market,
              imageUrl: poster,
              imageName: file.originalname,
              imageType: file.mimetype,
            },
            {
              where: {
                carpet_id: id,
              },
            }
          );

          res.status(201).json("updated resource successfuly");
        } else if (collectionName == "hi-tech") {
          await Hi_Tech_collection.update(
            {
              description,
              like,
              dislike,
              rating,
              sell,
              isNew,
              isTop,
              product_code,
              collection_name,
              in_market,
              imageUrl: poster,
              imageName: file.originalname,
              imageType: file.mimetype,
            },
            {
              where: {
                carpet_id: id,
              },
            }
          );

          res.status(201).json("updated resource successfuly");
        } else if (collectionName == "hermosa") {
          await Hermosa_collection.update(
            {
              description,
              like,
              dislike,
              rating,
              sell,
              isNew,
              isTop,
              product_code,
              collection_name,
              in_market,
              imageUrl: poster,
              imageName: file.originalname,
              imageType: file.mimetype,
            },
            {
              where: {
                carpet_id: id,
              },
            }
          );

          res.status(201).json("updated resource successfuly");
        } else if (collectionName == "feniks") {
          await Feniks_collection.update(
            {
              description,
              like,
              dislike,
              rating,
              sell,
              isNew,
              isTop,
              product_code,
              collection_name,
              in_market,
              imageUrl: poster,
              imageName: file.originalname,
              imageType: file.mimetype,
            },
            {
              where: {
                carpet_id: id,
              },
            }
          );

          res.status(201).json("updated resource successfuly");
        } else if (collectionName == "dream") {
          await Dream_collection.update(
            {
              description,
              like,
              dislike,
              rating,
              sell,
              isNew,
              isTop,
              product_code,
              collection_name,
              in_market,
              imageUrl: poster,
              imageName: file.originalname,
              imageType: file.mimetype,
            },
            {
              where: {
                carpet_id: id,
              },
            }
          );
          res.status(201).json("updated resource successfuly");
        } else if (collectionName == "diadema") {
          await Diadema_collection.update(
            {
              description,
              like,
              dislike,
              rating,
              sell,
              isNew,
              isTop,
              product_code,
              collection_name,
              in_market,
              imageUrl: poster,
              imageName: file.originalname,
              imageType: file.mimetype,
            },
            {
              where: {
                carpet_id: id,
              },
            }
          );
          res.status(201).json("updated resource successfuly");
        } else if (collectionName == "camellia") {
          await Camellia_collection.update(
            {
              description,
              like,
              dislike,
              rating,
              sell,
              isNew,
              isTop,
              product_code,
              collection_name,
              in_market,
              imageUrl: poster,
              imageName: file.originalname,
              imageType: file.mimetype,
            },
            {
              where: {
                carpet_id: id,
              },
            }
          );

          res.status(201).json("updated resource successfuly");
        } else if (collectionName == "camaro") {
          await Camaro_collection.update(
            {
              description,
              like,
              dislike,
              rating,
              sell,
              isNew,
              isTop,
              product_code,
              collection_name,
              in_market,
              imageUrl: poster,
              imageName: file.originalname,
              imageType: file.mimetype,
            },
            {
              where: {
                carpet_id: id,
              },
            }
          );

          res.status(201).json("updated resource successfuly");
        } else if (collectionName == "artemida") {
          await Artemida_collection.update(
            {
              description,
              like,
              dislike,
              rating,
              sell,
              isNew,
              isTop,
              product_code,
              collection_name,
              in_market,
              imageUrl: poster,
              imageName: file.originalname,
              imageType: file.mimetype,
            },
            {
              where: {
                id,
              },
            }
          );

          res.status(201).json("updated resource successfuly");
        } else {
          res.status(400).json("collection not found");
        }
      }

      res.status(200).json("resource updated successfuly");
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  DELETE_COLLECTION: async (req, res) => {
    try {
      const { id, collection_name, product_code } = req.body;

      if (id && collection_name && product_code) {
        const findCollectionId = await carpetCollections.findOne({
          where: {
            product_code,
          },
        });

        if (findCollectionId) {
          fs.unlinkSync(
            path.resolve(
              __dirname,
              `../../../public/uploads/carpet_collections/${findCollectionId.imageName}`
            ),
            (error) => {
              res.status(500).json({ error: error.message });
            }
          );

          await carpetCollections.destroy({
            where: {
              product_code,
            },
          });

          const collection = collection_name.toLowerCase();

          if (collection == "adele") {
            await Adele_collection.destroy({
              where: {
                carpet_id: id,
              },
            });
          } else if (collection == "Artemida") {
            await Artemida_collection.destroy({
              where: {
                carpet_id: id,
              },
            });
          } else if (collection == "camaro") {
            await Camaro_collection.destroy({
              where: {
                carpet_id: id,
              },
            });
          } else if (collection == "camellia") {
            await Camellia_collection.destroy({
              where: {
                carpet_id: id,
              },
            });
          } else if (collection == "diadema") {
            await Diadema_collection.destroy({
              where: {
                carpet_id: id,
              },
            });
          } else if (collection == "dream") {
            await Dream_collection.destroy({
              where: {
                carpet_id: id,
              },
            });
          } else if (collection == "feniks") {
            await Feniks_collection.destroy({
              where: {
                carpet_id: id,
              },
            });
          } else if (collection == "hermosa") {
            await Hermosa_collection.destroy({
              where: {
                carpet_id: id,
              },
            });
          } else if (collection == "hi-tech") {
            await Hi_Tech_collection.destroy({
              where: {
                carpet_id: id,
              },
            });
          } else if (collection == "kasandra") {
            await Kasandra_collection.destroy({
              where: {
                carpet_id: id,
              },
            });
          } else if (collection == "kenzo") {
            await Kenzo_collection.destroy({
              where: {
                carpet_id: id,
              },
            });
          } else if (collection == "legenda") {
            await Legenda_collection.destroy({
              where: {
                carpet_id: id,
              },
            });
          } else if (collection == "lindo") {
            await Lindo_collection.destroy({
              where: {
                carpet_id: id,
              },
            });
          } else if (collection == "millenium") {
            await Millenium_collection.destroy({
              where: {
                carpet_id: id,
              },
            });
          } else if (collection == "mustang") {
            await Mustang_collection.destroy({
              where: {
                carpet_id: id,
              },
            });
          } else if (collection == "prince") {
            await Prince_collection.destroy({
              where: {
                carpet_id: id,
              },
            });
          } else if (collection == "relax") {
            await Relax_collection.destroy({
              where: {
                carpet_id: id,
              },
            });
          } else if (collection == "salvatini") {
            await Salvatini_collection.destroy({
              where: {
                carpet_id: id,
              },
            });
          } else if (collection == "tresor") {
            await Tresor_collection.destroy({
              where: {
                carpet_id: id,
              },
            });
          } else if (collection == "unique") {
            await Unique_collection.destroy({
              where: {
                carpet_id: id,
              },
            });
          }

          res.status(200).json("deleted resources successfuly");
        } else {
          res.status(404).json("Not found");
        }
      } else {
        res.status(400).json("Invalid key");
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

// collectionsArr.forEach( async (item) => {
//   if(collection_name == item) {
//       //  const name = "_collection"
//     // let collection =`${collection_name[0].toUpperCase()+collection_name.slice(1, collection_name.length)}_collection`
//     await item.destroy({
//       where: {
//        carpet_id: id
//       }
//     })
//   }
// })
// const collectionsArr = [
//   "feniks",
//   "legenda",
//   "unique",
//   "prince",
//   "tresor",
//   "mustang",
//   "kenzo",
//   "hi_tech",
//   "kasandra",
//   "lindo",
//   "diadema",
//   "camaro",
//   "Dream_collection",
//   "adele",
//   "camellia",
//   "artemida",
//   "millenium",
//   "hermosa",
//   "relax",
//   "salvatini",
// ];
