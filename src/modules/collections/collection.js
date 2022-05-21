const {
  collections,
  carpetCollections,
  tuftingCollections,
  grassCollections,
} = require("../../model/model");
const { SERVERLINK } = require("../../config");
const fs = require("fs");
const path = require("path");

module.exports = {
  GET_CARPET_COLLECTIONS: async (_, res) => {
    try {
      res.status(200).json(await carpetCollections.findAll());
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  GET_TUFTING_COLLECTIONS: async (_, res) => {
    try {
      res.status(200).json(await tuftingCollections.findAll());
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  
  GET_GRASS_COLLECTIONS: async (_, res) => {
    try {
      res.status(200).json(await grassCollections.findAll());
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  POST_COLLECTION: async (req, res) => {
    try {
      const { product_code, collection_name, category } = req.body;

      let imagesArr = [];
      const file = req.file;
      const imgUrl = `${SERVERLINK}public/uploads/collections/${file.originalname}`;
      imagesArr.push(imgUrl);
      const [poster] = imagesArr;

      if (!product_code || !collection_name || !category) {
        res.status(404).json("key is not provided");
      } else {
        if (category == "carpet") {
          await carpetCollections.create({
            product_code,
            collection_name,
            imageUrl: poster,
            imageName: file.originalname,
            imageType: file.mimetype,
          });
        } else if (category == "tufting") {
          await tuftingCollections.create({
            product_code,
            collection_name,
            imageUrl: poster,
            imageName: file.originalname,
            imageType: file.mimetype,
          });
        } else if (category == "grass") {
          await grassCollections.create({
            product_code,
            collection_name,
            imageUrl: poster,
            imageName: file.originalname,
            imageType: file.mimetype,
          });
        }
        res.status(201).json("resource created succsessfully");
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  UPDATE_COLLECTION: async (req, res) => {
    try {
      const { id, product_code, collection_name, category } = req.body;

      if (id && product_code && collection_name && category) {

        const findCarpetCollectionId = await carpetCollections.findOne({
          where: {
            id,
          },
        });

        const findTuftingCollectionId = await tuftingCollections.findOne({
          where: {
            id,
          },
        });

        const findGrassCollectionId = await grassCollections.findOne({
          where: {
            id,
          },
        });

        let imagesArr = [];
        const file = req.file;
        const imgUrl = `${SERVERLINK}public/uploads/collections/${file.originalname}`;
        imagesArr.push(imgUrl);
        const [poster] = imagesArr;

          if (findCarpetCollectionId || findTuftingCollectionId || findGrassCollectionId) {
            if (category == "carpet") {
              await carpetCollections.update(
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

              fs.unlinkSync(
                path.resolve(
                  __dirname,
                  `../../../public/uploads/collections/${findCarpetCollectionId.imageName}`
                ),
                (error) => {
                  res.status(500).json({ error: error.message });
                }
              );
            } else if (category == "tufting") {
              await tuftingCollections.update(
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

              fs.unlinkSync(
                path.resolve(
                  __dirname,
                  `../../../public/uploads/collections/${findTuftingCollectionId.imageName}`
                ),
                (error) => {
                  res.status(500).json({ error: error.message });
                }
              );
            } else if (category == "grass") {
              await grassCollections.update(
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

              fs.unlinkSync(
                path.resolve(
                  __dirname,
                  `../../../public/uploads/collections/${findGrassCollectionId.imageName}`
                ),
                (error) => {
                  res.status(500).json({ error: error.message });
                }
              );
            }

            res.status(200).json("resource updated successfuly");
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

      if (id) {
        const findCarpetCollectionId = await carpetCollections.findOne({
          where: {
            id,
          },
        });

        const findTuftingCollectionId = await tuftingCollections.findOne({
          where: {
            id,
          },
        });

        const findGrassCollectionId = await grassCollections.findOne({
          where: {
            id,
          },
        });

        console.log(findGrassCollectionId);

        if (findCarpetCollectionId.category == category) {
          fs.unlinkSync(
            path.resolve(
              __dirname,
              `../../../public/uploads/collections/${findCarpetCollectionId.imageName}`
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
        } else if (findTuftingCollectionId.category == category) {
          fs.unlinkSync(
            path.resolve(
              __dirname,
              `../../../public/uploads/collections/${findTuftingCollectionId.imageName}`
            ),
            (error) => {
              res.status(500).json({ error: error.message });
            }
          );

          await tuftingCollections.destroy({
            where: {
              id,
            },
          });
        } else if (findGrassCollectionId.category == category) {
          fs.unlinkSync(
            path.resolve(
              __dirname,
              `../../../public/uploads/collections/${findGrassCollectionId.imageName}`
            ),
            (error) => {
              res.status(500).json({ error: error.message });
            }
          );

          await grassCollections.destroy({
            where: {
              id,
            },
          });
        }

        res.status(200).json("deleted resources successfuly");
      } else {
        res.status(404).json("Not found");
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
