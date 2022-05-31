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

      let params = {};
      // params['MID'] = MERCHANT_ID;
      params['CUSTOMER_ID'] = customer;
      params['TXN_AMOUNT'] = total_amount;

      // fetch('https://test.paycom.uz', {
      //   method: 'POST',
      //   body: JSON.stringify(params),
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': TEST_KEY
      //   }
      // }).then(res => res.json())
      //     .then(data => console.log(JSON.parse(data)))
      //     .catch(err => console.log(err));

      const url ='https://test.paycom.uz';
      const headers = {
        "Content-Type": "application/json",
        "MERCHANT_ID": MERCHANT_ID,
        "test_key": TEST_KEY
      }
      fetch(url, { method: 'POST', headers: headers, body: params})
          .then((data) => {
            console.log(data);
          });

      // res.writeHead(200, {'Content-Type': 'application/json'});
      // res.json(JSON.stringify(params))
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
