const { orders } = require("../../model/model");
const { TEST_KEY, MERCHANT_ID } = require('../../config')
require('dotenv').config()

module.exports = {
  GET_ORDERS: async (_, res) => {
    try {
      const a = process.env.TEST_KEY
      console.log(a)
      const allShops = await orders.findAll();
      res.json(allShops);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  POST_ORDER: async (req, res) => {
    try {
      const {
        customer,
        phone,
        product_name,
        product_code,
        size,
        color,
        address,
        quantity,
        price,
        callback,
      } = req.body;
      const total_amount = price * quantity

      const forms = {
        account: customer,
        merchatId: MERCHANT_ID,
        amount: total_amount
      }

      fetch('https://test.paycom.uz', {
        method: 'POST',
        body: JSON.stringify(forms),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': TEST_KEY
        }
      }).then(res => res.json())
          .then(json => console.log(json))
          .catch(err => console.log(err));

      await orders.create({
        customer,
        phone,
        product_name,
        product_code,
        size,
        color,
        address,
        quantity,
        price,
        total_amount,
        callback
      });

      res.status(201).json("resource create successfully");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  UPDATE_ORDER: async (req, res) => {
    try {
      const {
        id,
        customer,
        phone,
        product_name,
        product_code,
        size,
        color,
        address,
        quantity,
        price,
        callback,
      } = req.body;

      await orders.update(
        {
          customer,
          phone,
          product_name,
          product_code,
          size,
          color,
          address,
          quantity,
          price,
          callback,
        },
        {
          where: {
            id,
          },
        }
      );

      res.status(200).json("resource updated successfuly");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  DELETE_ORDER: async (req, res) => {
    try {
      const { id } = req.body;

      await orders.destroy({
        where: {
          id,
        },
      });

      res.status(200).json("resource deleted successfuly");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
