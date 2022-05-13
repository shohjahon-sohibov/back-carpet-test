const { orders } = require("../../model/model");
const fs = require("fs");
const path = require("path");

module.exports = {
  GET_ORDERS: async (_, res) => {
    try {
      const allShops = await orders.findAll();
      res.json(allShops);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  POST_ORDER: async (req, res) => {
    try {
      const { customer, phone, product_name, quantity, price, callback } =
        req.body;

      let imagesArr = [];
      const file = req.file;
      const imgUrl = `https://radiant-inlet-46994.herokuapp.com/public/uploads/${file.originalname}`;
      imagesArr.push(imgUrl);
      const [poster] = imagesArr;

      await orders.create({
        customer,
        phone,
        product_name,
        quantity,
        price,
        callback,
        imgUrl: poster,
        imageName: file.originalname,
      });
      res.status(201).json("resource create successfully");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  UPDATE_ORDER: async (req, res) => {
    try {
      const { id, customer, phone, product_name, quantity, price, callback } =
        req.body;

      const findOrderId = await orders.findOne({
        where: {
          id,
        },
      });

      if (findOrderId.imageName != req.file.originalname) {
        let imagesArr = [];
        const file = req.file;
        const imgUrl = `https://radiant-inlet-46994.herokuapp.com/public/uploads/${file.originalname}`;
        imagesArr.push(imgUrl);
        const [poster] = imagesArr;

        if (findOrderId) {
          fs.unlinkSync(
            path.resolve(
              __dirname,
              `../../../public/uploads/${findOrderId.imageName}`
            ),
            (error) => {
              res.status(500).json({ error: error?.message });
            }
          );

          await orders.update(
            {
              customer,
              phone,
              product_name,
              quantity,
              price,
              callback,
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
  DELETE_ORDER: async (req, res) => {
    try {
      const { id } = req.body;

      const findOrderId = await orders.findOne({
        where: {
          id,
        },
      });

      if (findOrderId) {
        fs.unlinkSync(
          path.resolve(
            __dirname,
            `../../../public/uploads/${findOrderId.imageName}`
          ),
          (error) => {
            res.status(500).json({ error: error?.message });
          }
        );

        await orders.destroy({
          where: {
            id,
          },
        });

        res.status(200).json("resource deleted successfuly");
      } else {
        res.status(404).json("Not found");
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
