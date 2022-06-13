const { brands } = require("../../model/Brands");
const { SERVERLINK } = require('../../config')
const fs = require("fs");
const path = require("path");

module.exports = {
  GET_BRANDS: async (_, res) => {
    try {
      const Brands = await brands.findAll({
        order: [["id", "DESC"]],
      });
      res.status(200).json(Brands);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  POST_BRAND: async (req, res) => {
    try {
      let imagesArr = [];
      const file = req.file;
      const imgUrl = `${SERVERLINK}public/uploads/brands/${file.originalname}`;
      imagesArr.push(imgUrl);
      const [poster] = imagesArr;
      await brands.create({
        imageType: file.mimetype,
        imageName: file.filename,
        imageUrl: poster,
      });
      res.status(201).json("new brand created successfully");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  DELETE_BRANDS: async (req, res) => {
    try {
      const { id } = req.body;

      const findBrandId = await brands.findOne({
        where: {
          id,
        },
      });

      if (findBrandId) {
        fs.unlinkSync(
          path.resolve(
            __dirname,
            `../../../public/uploads/brands/${findBrandId.imageName}`
          ),
          (error) => {
            res.status(500).json({ error: error.message });
          }
        );
        await brands.destroy({
          where: {
            id,
          },
        });

        res.status(200).json("deleted image successfuly");
      } else {
        res.status(404).json("Not found");
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
