const { aboutHolding } = require("../../model/model");
const { SERVERLINK } = require('../../config')
const fs = require("fs");
const path = require("path");

module.exports = {
  GET_ABOUTHOLDING: async (_, res) => {
    try {
      res.json(await aboutHolding.findAll());
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  POST_ABOUTHOLDING: async (req, res) => {
    try {
      const { title, description } = req.body;

      let imagesArr = [];
      const file = req.file;
      const imgUrl = `${SERVERLINK}public/uploads/${file.originalname}`;
      imagesArr.push(imgUrl);
      const [poster] = imagesArr;

      await aboutHolding.create({
        title,
        description,
        imgUrl: poster,
        imageName: file.originalname,
      });

      res.status(201).json("resource created successfully");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  UPDATE_ABOUTHOLDING: async (req, res) => {
    try {
      const { id, title, description } = req.body;

      const findAboutHoldingId = await aboutHolding.findOne({
        where: {
          id,
        },
      });

      if (findAboutHoldingId.imageName != req.file.originalname) {
        let imagesArr = [];
        const file = req.file;
        const imgUrl = `https://radiant-inlet-46994.herokuapp.com/public/uploads/${file.originalname}`;
        imagesArr.push(imgUrl);
        const [poster] = imagesArr;

        if (findAboutHoldingId) {
          fs.unlinkSync(
            path.resolve(
              __dirname,
              `../../../public/uploads/${findAboutHoldingId.imageName}`
            ),
            (error) => {
              res.json({ error: error?.message });
            }
          );

          await aboutHolding.update(
            {
              title,
              description,
              imgUrl: poster,
              imageName: file.originalname,
            },
            {
              where: {
                id,
              },
            }
          );

          res.status(200).json("resource updated successfully");
        } else {
          res.status(404).json("Not found");
        }
      } else {
        res.status(500).json("select a new image");
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  DELETE_ABOUTHOLDING: async (req, res) => {
    try {
      const { id } = req.body;

      const findAboutHoldingId = await aboutHolding.findOne({
        where: {
          id,
        },
      });

      if (findAboutHoldingId) {
        fs.unlinkSync(
          path.resolve(
            __dirname,
            `../../../public/uploads/${findAboutHoldingId.imageName}`
          ),
          (error) => {
            res.status(500).json({ error: error?.message });
          }
        );

        await aboutHolding.destroy({
          where: {
            id,
          },
        });

        res.status(200).json("resource deleted successfully");
      } else {
        res.status(404).json("Not found");
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
