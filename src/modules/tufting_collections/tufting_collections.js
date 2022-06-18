const { tuftingCollections } = require("../../model/Tufting-model");
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
const Organ_collection = require("../../model/tufting_collections/Organ.collection");
const Everest_collection = require("../../model/tufting_collections/Everest.collection");
const Marsel_collection = require("../../model/tufting_collections/Marsel.collection");
const Ostin_collection = require("../../model/tufting_collections/Ostin.collection");
const Meridian_collection = require("../../model/tufting_collections/Meridian.collection");
const Atlas_collection = require("../../model/tufting_collections/Atlas.collection");
const Kedr_collection = require("../../model/tufting_collections/Kedr.collection");
const Eco_collection = require("../../model/tufting_collections/Eco.collection");
const Venera_collection = require("../../model/tufting_collections/Venera.collection");
const Topol_collection = require("../../model/tufting_collections/Topol.collection");
const Edem_collection = require("../../model/tufting_collections/Edem.collection");
const Perfect_collection = require("../../model/tufting_collections/Perfect.collection");
const Liber_collection = require("../../model/tufting_collections/Liber.collection");
const Holiday_collection = require("../../model/tufting_collections/Holiday.collection");
const Hilton_collection = require("../../model/tufting_collections/Hilton.collection");
const Hayat_collection = require("../../model/tufting_collections/Hayat.collection");
const Indigo_collection = require("../../model/tufting_collections/Indigo.collection");
const Royal_collection = require("../../model/tufting_collections/Royal.collection");
const Yaguar_collection = require("../../model/tufting_collections/Yaguar.collection");
const Flower_collection = require("../../model/tufting_collections/Flower.collection");

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

        const collection = collection_name.toLowerCase();

        if (collection == "delta") {
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "dior") {
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "milano") {
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "radisson") {
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "platan") {
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "rodin") {
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "sadaf") {
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "kobul") {
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "laguna") {
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "infiniti") {
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "grafik") {
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "fendi") {
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "elis") {
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "mars") {
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "saturn") {
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "liberti") {
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "vesta") {
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "lexus") {
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "fresko") {
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "lufian") {
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "sparta") {
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "praga") {
          const newCarpet = await Praga_collection.create({
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "organ") {
          const newCarpet = await Organ_collection.create({
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "everest") {
          const newCarpet = await Everest_collection.create({
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "marsel") {
          const newCarpet = await Marsel_collection.create({
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "ostin") {
          const newCarpet = await Ostin_collection.create({
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "meridian") {
          const newCarpet = await Meridian_collection.create({
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "atlas") {
          const newCarpet = await Atlas_collection.create({
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "kedr") {
          const newCarpet = await Kedr_collection.create({
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "eco") {
          const newCarpet = await Eco_collection.create({
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "venera") {
          const newCarpet = await Venera_collection.create({
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "topol") {
          const newCarpet = await Topol_collection.create({
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "edem") {
          const newCarpet = await Edem_collection.create({
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "perfect") {
          const newCarpet = await Perfect_collection.create({
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "liber") {
          const newCarpet = await Liber_collection.create({
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "holiday") {
          const newCarpet = await Holiday_collection.create({
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "hilton") {
          const newCarpet = await Hilton_collection.create({
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "hayat") {
          const newCarpet = await Hayat_collection.create({
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "indigo") {
          const newCarpet = await Indigo_collection.create({
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "royal") {
          const newCarpet = await Royal_collection.create({
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "yaguar") {
          const newCarpet = await Yaguar_collection.create({
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection == "flower") {
          const newCarpet = await Flower_collection.create({
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
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
        const findCollectionId = await tuftingCollections.findOne({
          where: {
            product_code,
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
        }

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

        if (collection_name == "delta") {
          await Delta_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "dior") {
          await Dior_collection.update(
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
        } else if (collection_name == "milano") {
          await Milano_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "radisson") {
          await Radisson_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "platan") {
          await Platan_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "rodin") {
          await Rodin_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "sadaf") {
          await Sadaf_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "kobul") {
          await Kobul_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "laguna") {
          await Laguna_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "infiniti") {
          await Infiniti_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "grafik") {
          await Grafik_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "fendi") {
          await Fendi_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "elis") {
          await Elis_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "mars") {
          await Mars_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "saturn") {
          await Saturn_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "liberti") {
          await Liberti_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "vesta") {
          await Vesta_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "lexus") {
          await Lexus_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "fresko") {
          await Fresko_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "lufian") {
          await Lufian_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "sparta") {
          await Sparta_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "praga") {
          await Praga_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "organ") {
          await Organ_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "everest") {
          await Everest_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "marsel") {
          await Marsel_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "ostin") {
          await Ostin_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "meridian") {
          await Meridian_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "atlas") {
          await Atlas_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "kedr") {
          await Kedr_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "eco") {
          await Eco_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "venera") {
          await Venera_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "topol") {
          await Topol_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "edem") {
          await Edem_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "perfect") {
          await Perfect_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "liber") {
          await Liber_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "holiday") {
          await Holiday_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "hilton") {
          await Hilton_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "hayat") {
          await Hayat_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "indigo") {
          await Indigo_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "royal") {
          await Royal_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "yaguar") {
          await Yaguar_collection.update(
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
                carpet_id: id,
              },
            }
          );

          res.status(200).json("resource updated successfuly");
        } else if (collection_name == "flower") {
          await Flower_collection.update(
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
                carpet_id: id,
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
        res.status(400).json("key invalid");
      } else {
        const findCollectionId = await tuftingCollections.findOne({
          where: {
            product_code,
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

          const collection = collection_name.toLowerCase();

          await tuftingCollections.destroy({
            where: {
              product_code,
            },
          });

          if (collection == "delta") {
            await Delta_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "dior") {
            await Dior_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "milano") {
            await Milano_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "radisson") {
            await Radisson_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "platan") {
            await Platan_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "rodin") {
            await Rodin_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "sadaf") {
            await Sadaf_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "kobul") {
            await Kobul_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "laguna") {
            await Laguna_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "infiniti") {
            await Infiniti_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "grafik") {
            await Grafik_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "fendi") {
            await Fendi_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "elis") {
            await Elis_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "mars") {
            await Mars_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "saturn") {
            await Saturn_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "liberti") {
            await Liberti_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "vesta") {
            await Vesta_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "lexus") {
            await Lexus_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "fresko") {
            await Fresko_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "lufian") {
            await Lufian_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "sparta") {
            await Sparta_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "praga") {
            await Praga_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "organ") {
            await Organ_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "everest") {
            await Everest_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "marsel") {
            await Marsel_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "ostin") {
            await Ostin_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "meridian") {
            await Meridian_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "atlas") {
            await Atlas_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "kedr") {
            await Kedr_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "eco") {
            await Eco_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "venera") {
            await Venera_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "topol") {
            await Topol_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "edem") {
            await Edem_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "perfect") {
            await Perfect_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "liber") {
            await Liber_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "holiday") {
            await Holiday_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "hilton") {
            await Hilton_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "hayat") {
            await Hayat_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "indigo") {
            await Indigo_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "royal") {
            await Royal_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "yaguar") {
            await Yaguar_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
          } else if (collection == "flower") {
            await Flower_collection.destroy({
              where: {
                product_id: id,
              },
            });

            res.status(200).json("deleted resource successfuly");
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
