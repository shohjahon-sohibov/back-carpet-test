const { SERVERLINK } = require("../../config");
const fs = require("fs");
const path = require("path");

const {
  carpetCollections,
  Carpet_comments,
  Carpet_info,
} = require("../../model/model");
const { Adele_collection } = require("../../model/Adele.collection");
const { Relax_collection } = require("../../model/Relax.collection");
const { Tresor_collection } = require("../../model/Tresor.collection");
const { Unique_collection } = require("../../model/Unique.collection");
const { Prince_collection } = require("../../model/Prince.collection");
const { Mustang_collection } = require("../../model/Mustang.collection");
const { Millenium_collection } = require("../../model/Millenium.collection");
const { Lindo_collection } = require("../../model/Lindo.collection");
const { Legenda_collection } = require("../../model/Legenda.collection");
const { Kenzo_collection } = require("../../model/Kenzo.collection");
const { Kasandra_collection } = require("../../model/Kasandra.collection");
const { Hi_Tech_collection } = require("../../model/Hi-Tech.collection");
const { Hermosa_collection } = require("../../model/Hermosa.collection");
const { Feniks_collection } = require("../../model/Feniks.collection");
const { Dream_collection } = require("../../model/Dream.collection");
const { Diadema_collection } = require("../../model/Diadema.collection");
const { Camellia_collection } = require("../../model/Camellia.collection");
const { Camaro_collection } = require("../../model/Camaro.collection");
const { Artemida_collection } = require("../../model/Artemida.collection");
const { sequelize } = require("../../lib/sequelize");

module.exports = {
  GET_CARPETS: async (_, res) => {
    try {
      const carpets =  await carpetCollections.findAll({
        include: [
          {
            model: Carpet_comments,
            attributes: ["id", "body", "carpetCollectionId"],
          },
          {
            model: Carpet_info,
            attributes: [
              "id",
              "size",
              "price",
              "in_market",
              "product_code",
            ],
          },
        ],
      })
      res.status(200).json(carpets);
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

      const collectionName = collection_name.toLowerCase()

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

        res.status(201).json(newCarpet.id)
      } else if(collectionName == "adele") {
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

        res.status(201).json(newCarpet.id)
      } else if(collectionName == "tresor") {
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

        res.status(201).json(newCarpet.id)
      } else if(collectionName == "salvatini") {
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

        res.status(201).json(newCarpet.id)
      } else if(collectionName == "unique") {
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

        res.status(201).json(newCarpet.id)
      }  else if(collectionName == "prince") {
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

        res.status(201).json(newCarpet.id)
      }  else if(collectionName == "mustang") {
        const newCarpet =  await Mustang_collection.create({
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

        res.status(201).json(newCarpet.id)
      }  else if(collectionName == "millenium") {
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

        res.status(201).json(newCarpet.id)
      }  else if(collectionName == "lindo") {
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

        res.status(201).json(newCarpet.id)
      }  else if(collectionName == "legenda") {
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

        res.status(201).json(newCarpet.id)
      }  else if(collectionName == "kenzo") {
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

        res.status(201).json(newCarpet.id)
      }  else if(collectionName == "kasandra") {
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
        res.status(201).json(newCarpet.id)
      }  else if(collectionName == "hi-tech") {
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
        res.status(201).json(newCarpet.id)
      }  else if(collectionName == "hermosa") {
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
        res.status(201).json(newCarpet.id)
      }  else if(collectionName == "feniks") {
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
        res.status(201).json(newCarpet.id)
      }  else if(collectionName == "dream") {
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
        res.status(201).json(newCarpet.id)
      }  else if(collectionName == "diadema") {
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
        res.status(201).json(newCarpet.id)
      }  else if(collectionName == "camellia") {
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
        res.status(201).json(newCarpet.id)
      }  else if(collectionName == "camaro") {
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
        res.status(201).json(newCarpet.id)
      }  else if(collectionName == "artemida") {
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
        res.status(201).json(newCarpet.id)
      } else {
        res.status(400).json("collection not found")
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

      const findCollectionId = await carpetCollections.findOne({
        where: {
          id,
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
            id,
          },
        }
      );

      res.status(200).json("resource updated successfuly");
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  DELETE_COLLECTION: async (req, res) => {
    try {
      const { id } = req.body;

      if (id) {
        const findCollectionId = await carpetCollections.findOne({
          where: {
            id,
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
              id,
            },
          });

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
