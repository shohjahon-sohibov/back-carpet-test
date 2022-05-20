const { collections } = require("../../model/model");
const { SERVERLINK } = require("../../config");
const fs = require("fs");
const path = require("path");

module.exports = {
  GET_COLLECTIONS: async (_, res) => {
    try {
      const Collections = await collections.findAll();
      res.status(200).json(Collections);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  POST_COLLECTION: async (req, res) => {
    try {
      const { product_code, collection_name } = req.body;

      let imagesArr = [];
      const file = req.file;
      const imgUrl = `${SERVERLINK}public/uploads/collections/${file.originalname}`;
      imagesArr.push(imgUrl);
      const [poster] = imagesArr;

      await collections.create({
        product_code,
        collection_name,
        imageUrl: poster,
        imageName: file.originalname,
        imageType: file.mimetype,
      });
      res.status(201).json("resource created succsessfully");
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  UPDATE_COLLECTION: async (req, res) => {
    try {
      const { id, product_code, collection_name } = req.body;

      if (id && product_code) {
        const findCollectionId = await collections.findOne({
          where: {
            id,
          },
        });
        let imagesArr = [];
        const file = req.file;
        const imgUrl = `${SERVERLINK}public/uploads/collections/${file.originalname}`;
        imagesArr.push(imgUrl);
        const [poster] = imagesArr;

        if (findCollectionId) {
          if (findCollectionId.imageName != req.file.originalname) {
            fs.unlinkSync(
              path.resolve(
                __dirname,
                `../../../public/uploads/collections/${findCollectionId.imageName}`
              ),
              (error) => {
                res.status(500).json({ error: error.message });
              }
            );

            await collections.update(
              {
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
          } else {
            res.status(500).json("select a new image");
          }
        } else {
          res.status(404).json("Not found");
        }
      } else {
        res.status(400).json("key is not correct or not writed");
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  DELETE_COLLECTION: async (req, res) => {
    try {
      const { id } = req.body;

      const findCollectionId = await collections.findOne({
        where: {
          id,
        },
      });

      if (findCollectionId) {
        fs.unlinkSync(
          path.resolve(
            __dirname,
            `../../../public/uploads/collections/${findCollectionId.imageName}`
          ),
          (error) => {
            res.status(500).json({ error: error.message });
          }
        );

        await collections.destroy({
          where: {
            id,
          },
        });
        res.status(200).json("deleted resources successfuly");
      } else {
        res.status(404).json("Not found");
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
