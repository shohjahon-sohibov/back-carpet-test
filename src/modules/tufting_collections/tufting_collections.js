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
        res.status(400).json("key invalid")
      } else {
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
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
            id: newCarpet.product_id,
            code: newCarpet.product_code,
            collection_name: newCarpet.collection_name,
          });
        } else if (collection_name == "praga") {
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
        } else if (collection_name == "organ") {
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
        } else if (collection_name == "everest") {
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
        } else if (collection_name == "marsel") {
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
        } else if (collection_name == "ostin") {
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
        } else if (collection_name == "meridian") {
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
        } else if (collection_name == "atlas") {
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
        } else if (collection_name == "kedr") {
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
        } else if (collection_name == "eco") {
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
        } else if (collection_name == "venera") {
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
        } else if (collection_name == "topol") {
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
        } else if (collection_name == "edem") {
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
        } else if (collection_name == "perfect") {
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
        } else if (collection_name == "liber") {
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
        } else if (collection_name == "holiday") {
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
        } else if (collection_name == "hilton") {
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
        } else if (collection_name == "hayat") {
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
        } else if (collection_name == "indigo") {
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
        } else if (collection_name == "royal") {
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
        } else if (collection_name == "yaguar") {
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
        } else if (collection_name == "flower") {
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
    // try {
    //   const {
    //     id,
    //     description,
    //     in_market,
    //     like,
    //     dislike,
    //     rating,
    //     sell,
    //     isNew,
    //     isTop,
    //     product_code,
    //     collection_name,
    //   } = req.body;

    //   const findCollectionId = await tuftingCollections.findOne({
    //     where: {
    //       id,
    //     },
    //   });

    //   let imagesArr = [];
    //   const file = req.file;
    //   const imgUrl = `${SERVERLINK}public/uploads/tufting_collections/${file.originalname}`;
    //   imagesArr.push(imgUrl);
    //   const [poster] = imagesArr;

    //   if (findCollectionId.imageName != file.originalname) {
    //     fs.unlinkSync(
    //       path.resolve(
    //         __dirname,
    //         `../../../public/uploads/tufting_collections/${findCollectionId.imageName}`
    //       ),
    //       (error) => {
    //         res.status(500).json({ error: error.message });
    //       }
    //     );

    //     await tuftingCollections.update(
    //       {
    //         description,
    //         in_market,
    //         like,
    //         dislike,
    //         rating,
    //         sell,
    //         isNew,
    //         isTop,
    //         product_code,
    //         collection_name,
    //         imageUrl: poster,
    //         imageName: file.originalname,
    //         imageType: file.mimetype,
    //       },
    //       {
    //         where: {
    //           id,
    //         },
    //       }
    //     );

    //     res.status(200).json("resource updated successfuly");
    //   }
    // } catch (error) {
    //   return res.status(500).json({ error: error.message });
    // }
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
