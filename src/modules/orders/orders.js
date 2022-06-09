const { orders, Clients } = require("../../model/model");
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
      const { order, customer, phone, address, callback } = req.body;

      await Clients.create({ client_name: customer, client_phone: phone })

      let amount = 0;
      let count = 0
      order.forEach(async (item) => {

        const arrLength = order.length;
        console.log(arrLength);

        const total_amount = item.price * item.quantity;

        const newOrder = await orders.create({
          customer,
          phone,
          address,
          callback,
          product_name: item.product_name,
          product_code: item.product_code,
          size: item.size,
          quantity: item.quantity,
          price: item.price,
          total_amount: total_amount,
        });

        amount = amount + total_amount

        count++
        
        if(arrLength == count) {
          res.json({
             amount: amount,
             fullname: newOrder.customer,
             order_id: date,
          });
        }

      });

      // console.log(amount);

      // const amount = []

      // arr.forEach((item) => {
      //   amount.push(amount + item.total_amount)
      // })

      // console.log(amount);

      // customer,
      //   phone,
      //   product_name,
      //   product_code,
      //   size,
      //   color,
      //   address,
      //   quantity,
      //   price,
      //   callback,

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

      const date = new Date();
      console.log(date, "date");

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
