const { news } = require("../../model/model");
const { SERVERLINK } = require('../../config')
const fs = require("fs");
const path = require("path");

module.exports = {
  GET_NEWS: async (_, res) => {
    try {
      res.status(200).json(await news.findAll());
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  POST_NEWS: async (req, res) => {
    try {
      const { title, description } = req.body;
      let imagesArr = [];
      const file = req.file;
      const imgUrl = `${SERVERLINK}public/uploads/${file.originalname}`;
      imagesArr.push(imgUrl);
      const [poster] = imagesArr;

      await news.create({
        title,
        description,
        imgUrl: poster,
        imageName: file.originalname,
      });

      res.status(201).json(" created news successfully");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  UPDATE_NEWS: async (req, res) => {
    try {
      const { id, title, description } = req.body;

      const findNewsId = await news.findOne({
        where: {
          id,
        },
      });

      if (findNewsId.imageName != req.file.originalname) {
        let imagesArr = [];
        const file = req.file;
        const imgUrl = `https://radiant-inlet-46994.herokuapp.com/public/uploads/${file.originalname}`;
        imagesArr.push(imgUrl);
        const [poster] = imagesArr;

        if (findNewsId) {
          fs.unlinkSync(
            path.resolve(
              __dirname,
              `../../../public/uploads/${findNewsId.imageName}`
            ),
            (error) => {
              res.status(500).json({ error: error?.message });
            }
          );

          await news.update(
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

          res.status(200).json("resource updated successfuly");
        } else {
          res.status(404).json("Not found");
        }
      } else {
        res.status(500).json("select a new image ");
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  DELETE_NEWS: async (req, res) => {
    try {
      const { id } = req.body;

      const findNewsId = await news.findOne({
        where: {
          id,
        },
      });
      if (findNewsId) {
        fs.unlinkSync(
          path.resolve(
            __dirname,
            `../../../public/uploads/${findNewsId.imageName}`
          ),
          (error) => {
            res.status(500).json({ error: error?.message });
          }
        );
      }

      await news.destroy({
        where: {
          id,
        },
      });

      res.status(200).json("deleted news successfully");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
