const { tuftingCollections, Tufting_comments, Tufting_info } = require("../../model/model");
const { SERVERLINK } = require("../../config");
const fs = require("fs");
const path = require("path");
const Milano_collection = require("../../model/tufting_collections/Milano.collection");
const Radisson_collection = require("../../model/tufting_collections/Radisson.collection");
const Platan_collection = require("../../model/tufting_collections/Platan.collection");
const Dior_collection = require("../../model/tufting_collections/Dior.collection");
const Rodin_collection = require("../../model/tufting_collections/Rodin.collection");
const Sadaf_collection = require("../../model/tufting_collections/Sadaf.collection");
const Kobul_collection = require("../../model/tufting_collections/Kobul.collection");
const Laguna_collection = require("../../model/tufting_collections/Laguna.collection");
const Infiniti_collection = require("../../model/tufting_collections/Infiniti.collection");
const Grafik_collection = require("../../model/tufting_collections/Grafik.collection");
const Fendi_collection = require("../../model/tufting_collections/Fendi.collection");
const Delta_collection = require("../../model/tufting_collections/Delta.collection");
const Elis_collection = require("../../model/tufting_collections/Elis.collection");
const Mars_collection = require("../../model/tufting_collections/Mars.collection");
const Saturn_collection = require("../../model/tufting_collections/Saturn.collection");
const Liberti_collection = require("../../model/tufting_collections/Liberti.collection");
const Vesta_collection = require("../../model/tufting_collections/Vesta.collection");
const Lexus_collection = require("../../model/tufting_collections/Lexus.collection");
const Fresko_collection = require("../../model/tufting_collections/Fresko.collection");
const Lufian_collection = require("../../model/tufting_collections/Lufian.collection");
const Sparta_collection = require("../../model/tufting_collections/Sparta.collection");
const Praga_collection = require("../../model/tufting_collections/Praga.collection");
// const Organ_collection = require("../../model/tufting_collections/Organ.collection");

module.exports = {
  GET_COLLECTIONS: async (_, res) => {
    try {
      res.status(200).json(await tuftingCollections.findAll());
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
      
        let imagesArr = [];
        const file = req.file;
        const imgUrl = `${SERVERLINK}public/uploads/tufting_collections/${file.originalname}`;
        imagesArr.push(imgUrl);
        const [poster] = imagesArr;

        await tuftingCollections.create({
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

        if (collection_name == "delta") {
          const newCarpet = await Delta_collection.create({
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
            id: newCarpet.tufting_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name
          });
        } else if (collection_name == "dior") {
          const newCarpet = await Dior_collection.create({
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
            id: newCarpet.tufting_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name
          });
        } else if (collection_name == "milano") {
          const newCarpet = await Milano_collection.create({
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
            id: newCarpet.tufting_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name
          });
        } else if (collection_name == "radisson") {
          const newCarpet = await Radisson_collection.create({
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
            id: newCarpet.tufting_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name
          });
        } else if (collection_name == "platan") {
          const newCarpet = await Platan_collection.create({
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
            id: newCarpet.tufting_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name
          });
        } else if (collection_name == "rodin") {
          const newCarpet = await Rodin_collection.create({
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
            id: newCarpet.tufting_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name
          });
        } else if (collection_name == "sadaf") {
          const newCarpet = await Sadaf_collection.create({
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
            id: newCarpet.tufting_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name
          });
        } else if (collection_name == "kobul") {
          const newCarpet = await Kobul_collection.create({
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
            id: newCarpet.tufting_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name
          });
        } else if (collection_name == "laguna") {
          const newCarpet = await Laguna_collection.create({
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
            id: newCarpet.tufting_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name
          });
        } else if (collection_name == "infiniti") {
          const newCarpet = await Infiniti_collection.create({
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
            id: newCarpet.tufting_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name
          });
        } else if (collection_name == "grafik") {
          const newCarpet = await Grafik_collection.create({
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
            id: newCarpet.tufting_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name
          });
        } else if (collection_name == "fendi") {
          const newCarpet = await Fendi_collection.create({
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
            id: newCarpet.tufting_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name
          });
        } else if (collection_name == "elis") {
          const newCarpet = await Elis_collection.create({
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
            id: newCarpet.tufting_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name
          });
        } else if (collection_name == "mars") {
          const newCarpet = await Mars_collection.create({
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
            id: newCarpet.tufting_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name
          });
        } else if (collection_name == "saturn") {
          const newCarpet = await Saturn_collection.create({
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
            id: newCarpet.tufting_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name
          });
        } else if (collection_name == "liberti") {
          const newCarpet = await Liberti_collection.create({
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
            id: newCarpet.tufting_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name
          });
        } else if (collection_name == "vesta") {
          const newCarpet = await Vesta_collection.create({
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
            id: newCarpet.tufting_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name
          });
        } else if (collection_name == "lexus") {
          const newCarpet = await Lexus_collection.create({
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
            id: newCarpet.tufting_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name
          });
        } else if (collection_name == "fresko") {
          const newCarpet = await Fresko_collection.create({
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
            id: newCarpet.tufting_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name
          });
        } else if (collection_name == "lufian") {
          const newCarpet = await Lufian_collection.create({
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
            id: newCarpet.tufting_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name
          });
        } else if (collection_name == "sparta") {
          const newCarpet = await Sparta_collection.create({
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
            id: newCarpet.tufting_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name
          });
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

        const findCollectionId = await tuftingCollections.findOne({
          where: {
            id,
          },
        });

        let imagesArr = [];
        const file = req.file;
        const imgUrl = `${SERVERLINK}public/uploads/tufting_collections/${file.originalname}`;
        imagesArr.push(imgUrl);
        const [poster] = imagesArr;

        if (findCollectionId.imageName != file.originalname) {
          fs.unlinkSync(
            path.resolve(
              __dirname,
              `../../../public/uploads/tufting_collections/${findCollectionId.imageName}`
            ),
            (error) => {
              res.status(500).json({ error: error.message });
            }
          );

          await tuftingCollections.update(
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

          res.status(200).json("resource updated successfuly");
        }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  DELETE_COLLECTION: async (req, res) => {
    try {
      const { id } = req.body;

      if (id) {
        const findCollectionId = await tuftingCollections.findOne({
          where: {
            id,
          },
        });

        if (findCollectionId) {
          fs.unlinkSync(
            path.resolve(
              __dirname,
              `../../../public/uploads/tufting_collections/${findCollectionId.imageName}`
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
