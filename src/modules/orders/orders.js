const { orders } = require("../../model/model");
const { TEST_KEY, MERCHANT_ID } = require('../../config')
const fetch = require('node-fetch')
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

      if(!customer || !phone || !price || !quantity) {
        res.status(400).send('Payment failed')
      } else {
        let params = {};
        params['MID'] = MERCHANT_ID;
        params['ORDER_ID'] = 'TEST_'  + new Date().getTime();
        params['CUSTOMER_ID'] = customer;
        params['TXN_AMOUNT'] = total_amount;

          let form_fields = "";
          for (let item in params) {
            form_fields += "<input type='hidden' name='" + item + "' value='" + params[item] + "' >";
          }

          console.log(form_fields)

      fetch('https://test.paycom.uz', {
        method: 'POST',
        body: form_fields,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': TEST_KEY
        }
      }).then(res => res.json())
          .then(data => console.log(JSON.parse(data)))
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

      res.status(200).json("resource create successfully");
      }

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
