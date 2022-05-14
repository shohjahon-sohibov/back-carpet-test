const { branch } = require("../../model/model");
const { SERVERLINK } = require("../../config");
const fs = require("fs");
const path = require("path");

module.exports = {
  GET_BRANCHES: async (_, res) => {
    try {
      const Branches = await branch.findAll();
      res.status(200).json(Branches);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  POST_BRANCHES: async (req, res) => {
    try {
      const { name, address, phone, gmail, region } = req.body;
      let imagesArr = [];
      const file = req.file;
      const imgUrl = `${SERVERLINK}public/uploads/branches/${file.originalname}`;
      imagesArr.push(imgUrl);
      const [poster] = imagesArr;
      await branch.create({
        name,
        address,
        phone,
        gmail,
        region,
        imgUrl: poster,
        imageName: file.originalname,
      });

      res.status(201).json("new branch creaated successfully");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  UPDATE_BRANCHES: async (req, res) => {
    try {
      const { id, name, address, phone, gmail, region } = req.body;

      const findBranchId = await branch.findOne({
        where: {
          id,
        },
      });

      if (findBranchId) {
        if (findBranchId.imageName != req.file.originalname) {
          let imagesArr = [];
          const file = req.file;
          const imgUrl = `${SERVERLINK}public/uploads/branches/${file.originalname}`;
          imagesArr.push(imgUrl);
          const [poster] = imagesArr;

          fs.unlinkSync(
            path.resolve(
              __dirname,
              `../../../public/uploads/branches/${findBranchId.imageName}`
            ),
            (error) => {
              res.status(500).json({ error: error?.message });
            }
          );

          await branch.update(
            {
              name,
              address,
              phone,
              gmail,
              region,
              imgUrl: poster,
              imageName: file.originalname,
            },
            {
              where: {
                id,
              },
            }
          );

          res.status(201).json("deleted old image updated data of branch");
        } else {
          res.status(500).json({ error: error.message });
        }
      } else {
        res.status(404).json("Not found");
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  DELETE_BRANCHES: async (req, res) => {
    try {
      const { id } = req.body;

      const findBranchId = await branch.findOne({
        where: {
          id,
        },
      });

      if (findBranchId) {
        fs.unlinkSync(
          path.resolve(
            __dirname,
            `../../../public/uploads/branches/${findBranchId.imageName}`
          ),
          (error) => {
            res.status(500).json({ error: error?.message });
          }
        );
        await branch.destroy({
          where: {
            id,
          },
        });
        res.status(200).json("deleted branch successfully");
      } else {
        res.status(404).json("Not found");
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
