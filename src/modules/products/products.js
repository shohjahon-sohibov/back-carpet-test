const { products } = require("../../model/model");
const { SERVERLINK } = require("../../config");
const fs = require("fs");
const path = require("path");

module.exports = {
  GET_PRODUCTS: async (_, res) => {
    try {
      const Products = await products.findAll();
      res.status(200).json(Products);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  POST_PRODUCTS: async (req, res) => {
    try {
      const {
        title,
        description,
        price,
        color,
        size,
        category,
        like,
        dislike,
        rating,
        sell,
      } = req.body;

      let imagesArr = [];
      const file = req.file;
      const imgUrl = `${SERVERLINK}public/uploads/${file.originalname}`;
      imagesArr.push(imgUrl);
      const [poster] = imagesArr;
      console.log(file);
      await products.create({
        title,
        description,
        price,
        color,
        size,
        category,
        like,
        dislike,
        rating,
        sell,
        imageUrl: poster,
        imageName: file.originalname,
        imageType: file.mimetype,
      });
      res.status(201).json("new product created succsessfully");
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  UPDATE_PRODUCT: async (req, res) => {
    try {
      const {
        id,
        title,
        description,
        price,
        color,
        size,
        category,
        like,
        dislike,
        rating,
        sell,
      } = req.body;

      const findProductId = await products.findOne({
        where: {
          id,
        },
      });

      if (findProductId.imageName != req.file.originalname) {
        let imagesArr = [];
        const file = req.file;
        const imgUrl = `https://radiant-inlet-46994.herokuapp.com/public/uploads/${file.originalname}`;
        imagesArr.push(imgUrl);
        const [poster] = imagesArr;

        if (findProductId) {
          fs.unlinkSync(
            path.resolve(
              __dirname,
              `../../../public/uploads/${findProductId.imageName}`
            ),
            (error) => {
              res.status(500).json({ error: error?.message });
            }
          );

          await products.update(
            {
              title,
              description,
              price,
              color,
              size,
              category,
              like,
              dislike,
              rating,
              sell,
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
          res.status(404).json("Not found");
        }
      } else {
        res.status(500).json("select a new image ");
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  DELETE_PRODUCT: async (req, res) => {
    try {
      const { id } = req.body;

      const findProductId = await products.findOne({
        where: {
          id,
        },
      });

      if (findProductId) {
        fs.unlinkSync(
          path.resolve(
            __dirname,
            `../../../public/uploads/${findProductId.imageName}`
          ),
          (error) => {
            res.status(500).json({ error: error?.message });
          }
        );

        await products.destroy({
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
