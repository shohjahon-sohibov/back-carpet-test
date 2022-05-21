const { products, comments, Product_info } = require("../../model/model");
const { SERVERLINK } = require("../../config");
const fs = require("fs");
const path = require("path");

module.exports = {
  GET_PRODUCTS: async (_, res) => {
    try {
      const Products = await products.findAll({
        include: [
          {
            comments,
            Product_info,
          },
        ],
      });
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
        product_code,
        quality,
        category,
        like,
        dislike,
        rating,
        sell,
        isNew,
        isTop,
      } = req.body;

      let imagesArr = [];
      const file = req.file;
      const imgUrl = `${SERVERLINK}public/uploads/products/${file.originalname}`;
      imagesArr.push(imgUrl);
      const [poster] = imagesArr;
      await products.create({
        title,
        description,
        product_code,
        price,
        color,
        size,
        category,
        like,
        dislike,
        rating,
        sell,
        isNew,
        isTop,
        imageUrl: poster,
        imageName: file.originalname,
        imageType: file.mimetype,
      });

      // const isCollectionFound = await collections.findOne({
      //   where: {
      //     product_code,
      //   },
      // });
      // if (!isCollectionFound) {

      //   let imagesArrCollections = [];
      //   const fileCollection = req.file;
      //   const imgUrlCollections = `${SERVERLINK}public/uploads/collections/${fileCollection.originalname}`;
      //   imagesArrCollections.push(imgUrlCollections);
      //   const [poster] = imagesArrCollections;

      //   const createdCollection = await collections.create({
      //     product_code,
      //     imageUrl: poster,
      //     imageName: fileCollection.originalname,
      //     imageType: fileCollection.mimetype,
      //   });

      //   console.log(createdCollection);
      // }

      res.status(201).json("resource created succsessfully");
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
        product_code,
        price,
        color,
        size,
        category,
        like,
        dislike,
        rating,
        sell,
        isNew,
        isTop,
      } = req.body;

      const findProductId = await products.findOne({
        where: {
          id,
        },
      });
      let imagesArr = [];
      const file = req.file;
      const imgUrl = `${SERVERLINK}public/uploads/products/${file.originalname}`;
      imagesArr.push(imgUrl);
      const [poster] = imagesArr;

      if (findProductId) {
        fs.unlinkSync(
          path.resolve(
            __dirname,
            `../../../public/uploads/products/${findProductId.imageName}`
          ),
          (error) => {
            res.status(500).json({ error: error.message });
          }
        );

        await products.update(
          {
            title,
            description,
            product_code,
            price,
            color,
            size,
            category,
            like,
            dislike,
            rating,
            sell,
            isNew,
            isTop,
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
            `../../../public/uploads/products/${findProductId.imageName}`
          ),
          (error) => {
            res.status(500).json({ error: error.message });
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
