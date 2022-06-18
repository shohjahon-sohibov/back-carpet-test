const { grassCollections } = require("../../model/Grass-model");
const { Grass_comments } = require("../../model/comments/Grass-comments");
const { Grass_info } = require("../../model/collection-sizes/Grass-size");
const { SERVERLINK } = require("../../config");
const fs = require("fs");
const path = require("path");

const Arena_collection = require("../../model/grass_collections/Arena.collection");
const Bahar_collection = require("../../model/grass_collections/Bahar.collection");
const Chelsi_collection = require("../../model/grass_collections/Chelsi.collection");
const Fifa_collection = require("../../model/grass_collections/Fifa.collection");
const Green_collection = require("../../model/grass_collections/Green.collection");
const Mono_collection = require("../../model/grass_collections/Mono.collection");
const Savana_collection = require("../../model/grass_collections/Savana.collection");
const Tarnado_collection = require("../../model/grass_collections/Tarnado.collection");

module.exports = {
  GET_COLLECTIONS: async (_, res) => {
    try {
      res.status(200).json(
        await grassCollections.findAll({
          include: [
            {
              model: Grass_comments,
              attributes: ["id", "body", "grassCollectionId"],
            },
            {
              model: Grass_info,
              attributes: [
                "id",
                "size",
                "price",
                "in_market",
                "grassCollectionId",
              ],
            },
          ],
        })
      );
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  POST_COLLECTION: async (req, res) => {
    try {
      const {
        description,
        in_market,
        like,
        dislike,
        rating,
        sell,
        isNew,
        isTop,
        product_code,
        collection_name,
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
        let imagesArr = [];
        const file = req.file;
        const imgUrl = `${SERVERLINK}public/uploads/grass_collections/${file.originalname}`; // make photo link to save in base
        imagesArr.push(imgUrl);
        const [poster] = imagesArr;

        await grassCollections.create({
          description,
          in_market,
          like,
          dislike,
          rating,
          sell,
          isNew,
          isTop,
          product_code,
          collection_name,
          imageUrl: poster,
          imageName: file.originalname,
          imageType: file.mimetype,
        });

        const collection = collection_name.toLowerCase();

        if (collection == "fifa") {
          const newGrass = await Fifa_collection.create({
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
            id: newGrass.grass_id,
            code: newGrass.product_code,
            collection_name: newGrass.collection_name,
          });
        } else if (collection == "green") {
          const newGrass = await Green_collection.create({
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
            id: newGrass.grass_id,
            code: newGrass.product_code,
            collection_name: newGrass.collection_name,
          });
        } else if (collection == "savana") {
          const newGrass = await Savana_collection.create({
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
            id: newGrass.grass_id,
            code: newGrass.product_code,
            collection_name: newGrass.collection_name,
          });
        } else if (collection == "mono") {
          const newGrass = await Mono_collection.create({
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
            id: newGrass.grass_id,
            code: newGrass.product_code,
            collection_name: newGrass.collection_name,
          });
        } else if (collection == "chelsi") {
          const newGrass = await Chelsi_collection.create({
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
            id: newGrass.grass_id,
            code: newGrass.product_code,
            collection_name: newGrass.collection_name,
          });
        } else if (collection == "tarnado") {
          const newGrass = await Tarnado_collection.create({
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
            id: newGrass.grass_id,
            code: newGrass.product_code,
            collection_name: newGrass.collection_name,
          });
        } else if (collection == "arena") {
          const newGrass = await Arena_collection.create({
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
            id: newGrass.grass_id,
            code: newGrass.product_code,
            collection_name: newGrass.collection_name,
          });
        } else if (collection == "bahar") {
          const newGrass = await Bahar_collection.create({
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
            id: newGrass.grass_id,
            code: newGrass.product_code,
            collection_name: newGrass.collection_name,
          });
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
        in_market,
        like,
        dislike,
        rating,
        sell,
        isNew,
        isTop,
        product_code,
        collection_name,
      } = req.body;

      let imagesArr = [];
      const file = req.file;
      const imgUrl = `${SERVERLINK}public/uploads/grass_collections/${file.originalname}`;
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
        const findCollectionId = await grassCollections.findOne({
          where: {
            id,
          },
        });

        let imagesArr = [];
        const file = req.file;
        const imgUrl = `${SERVERLINK}public/uploads/grass_collections/${file.originalname}`; // make photo link to save in base
        imagesArr.push(imgUrl);
        const [poster] = imagesArr;

        if (findCollectionId.imageName != file.originalname) {
          fs.unlinkSync(
            path.resolve(
              __dirname,
              `../../../public/uploads/grass_collections/${findCollectionId.imageName}`
            ),
            (error) => {
              res.status(500).json({ error: error.message });
            }
          );
        }

        await grassCollections.update(
          {
            description,
            in_market,
            like,
            dislike,
            rating,
            sell,
            isNew,
            isTop,
            product_code,
            collection_name,
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

        const collection = collection_name.toLowerCase();

        if (collection == "fifa") {
          await Fifa_collection.update(
            {
              description,
              in_market,
              like,
              dislike,
              rating,
              sell,
              isNew,
              isTop,
              product_code,
              collection_name,
              imageUrl: poster,
              imageName: file.originalname,
              imageType: file.mimetype,
            },
            {
              where: {
                grass_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection == "green") {
          await Green_collection.update(
            {
              description,
              in_market,
              like,
              dislike,
              rating,
              sell,
              isNew,
              isTop,
              product_code,
              collection_name,
              imageUrl: poster,
              imageName: file.originalname,
              imageType: file.mimetype,
            },
            {
              where: {
                grass_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection == "savana") {
          await Savana_collection.update(
            {
              description,
              in_market,
              like,
              dislike,
              rating,
              sell,
              isNew,
              isTop,
              product_code,
              collection_name,
              imageUrl: poster,
              imageName: file.originalname,
              imageType: file.mimetype,
            },
            {
              where: {
                grass_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection == "mono") {
          await Mono_collection.update(
            {
              description,
              in_market,
              like,
              dislike,
              rating,
              sell,
              isNew,
              isTop,
              product_code,
              collection_name,
              imageUrl: poster,
              imageName: file.originalname,
              imageType: file.mimetype,
            },
            {
              where: {
                grass_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection == "chelsi") {
          await Chelsi_collection.update(
            {
              description,
              in_market,
              like,
              dislike,
              rating,
              sell,
              isNew,
              isTop,
              product_code,
              collection_name,
              imageUrl: poster,
              imageName: file.originalname,
              imageType: file.mimetype,
            },
            {
              where: {
                grass_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection == "tarnado") {
          await Tarnado_collection.update(
            {
              description,
              in_market,
              like,
              dislike,
              rating,
              sell,
              isNew,
              isTop,
              product_code,
              collection_name,
              imageUrl: poster,
              imageName: file.originalname,
              imageType: file.mimetype,
            },
            {
              where: {
                grass_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection == "arena") {
          await Arena_collection.update(
            {
              description,
              in_market,
              like,
              dislike,
              rating,
              sell,
              isNew,
              isTop,
              product_code,
              collection_name,
              imageUrl: poster,
              imageName: file.originalname,
              imageType: file.mimetype,
            },
            {
              where: {
                grass_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection == "bahar") {
          await Bahar_collection.update(
            {
              description,
              in_market,
              like,
              dislike,
              rating,
              sell,
              isNew,
              isTop,
              product_code,
              collection_name,
              imageUrl: poster,
              imageName: file.originalname,
              imageType: file.mimetype,
            },
            {
              where: {
                grass_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        }
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  DELETE_COLLECTION: async (req, res) => {
    try {
      const { id, collection_name, product_code } = req.body;

      if (!id || !collection_name || !product_code) {
        res.status(400).json("Invalid key");
      } else {
        const findCollectionId = await grassCollections.findOne({
          where: {
            id,
          },
        });

        if (findCollectionId) {
          fs.unlinkSync(
            path.resolve(
              __dirname,
              `../../../public/uploads/grass_collections/${findCollectionId.imageName}`
            ),
            (error) => {
              res.status(500).json({ error: error.message });
            }
          );

          await grassCollections.destroy({
            where: {
              product_code,
            },
          });
          const collection = collection_name.toLowerCase();

          if (collection == "fifa") {
            await Fifa_collection.destroy({
              where: {
                grass_id: id,
              },
            });
            res.status(200).json("resource updated successfuly");
          } else if (collection == "green") {
            await Green_collection.destroy({
              where: {
                grass_id: id,
              },
            });
            res.status(200).json("resource updated successfuly");
          } else if (collection == "savana") {
            await Savana_collection.destroy({
              where: {
                grass_id: id,
              },
            });
            res.status(200).json("resource updated successfuly");
          } else if (collection == "mono") {
            await Mono_collection.destroy({
              where: {
                grass_id: id,
              },
            });
            res.status(200).json("resource updated successfuly");
          } else if (collection == "chelsi") {
            await Chelsi_collection.destroy({
              where: {
                grass_id: id,
              },
            });
            res.status(200).json("resource updated successfuly");
          } else if (collection == "tarnado") {
            await Tarnado_collection.destroy({
              where: {
                grass_id: id,
              },
            });
            res.status(200).json("resource updated successfuly");
          } else if (collection == "arena") {
            await Arena_collection.destroy({
              where: {
                grass_id: id,
              },
            });
            res.status(200).json("resource updated successfuly");
          } else if (collection == "bahar") {
            await Bahar_collection.destroy({
              where: {
                grass_id: id,
              },
            });
            res.status(200).json("resource updated successfuly");
          }
        } else {
          res.status(404).json("Not found");
        }
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
