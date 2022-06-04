const { orders } = require("../../model/model");
// const { MERCHANT_ID } = require('../../config')
// const fetch = require('node-fetch')

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

      const newOrder = await orders.create({
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

      // let params = {
      //   merchant: MERCHANT_ID,
      //   amount: total_amount,
      //   account: [{
      //     user_id: newOrder.id,
      //   }]
      // };
      // var accounts = {
      //   fullname: customer,
      //   order_id: newOrder.id
      // }

      // const url ='https://checkout.paycom.uz';
      // const headers = {
      //   "Content-Type": "application/json"
      // }
      // fetch(url, { method: 'POST', headers: headers, body: params})
      //     .then((json) => {
      //       console.log(json);
      //     });
      res.json({
         amount: newOrder.total_amount, 
         fullname: newOrder.customer, 
         order_id: newOrder.id
        })
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
