const { carpetCollections } = require("../../model/model");
const { SERVERLINK } = require("../../config");
const fs = require("fs");
const path = require("path");

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
        title,
        description,
        price,
        size,
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
        const imgUrl = `${SERVERLINK}public/uploads/carpet_collections/${file.originalname}`;
        imagesArr.push(imgUrl);
        const [poster] = imagesArr;

        await carpetCollections.create({
          title,
          description,
          price,
          size,
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
        res.status(201).json("resource created successfully");
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  UPDATE_COLLECTION: async (req, res) => {
    try {
      const {
        id,
        title,
        description,
        price,
        size,
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
            title,
            description,
            price,
            size,
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
