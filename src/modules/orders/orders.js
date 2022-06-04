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
        order,
        customer,
        phone,
        address,
        callback
        } = req.body;

      // console.log(order);

      
      order.forEach( async(item) => {
        // const arr = [];

      const total_amount = item.price * item.quantity
        
        // arr.push({
        //   product_name: item.product_name,
        //   product_code: item.product_code,
        //   size: item.size,
        //   // color: item.color,
        //   quantity: item.quantity,
        //   price: item.price,
        //   total_amount: total_amount          
        // })

        const newOrder = await orders.create({
          customer,
          phone,
          address,
          callback,
          product_name: item.product_name,
          product_code: item.product_code,
          size: item.size,
          // color: item.color,
          quantity: item.quantity,
          price: item.price,
          total_amount: total_amount,
        });
      })

    


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
      res.json({
        //  amount: newOrder.total_amount, 
        //  fullname: newOrder.customer, 
        //  order_id: newOrder.id
        res: "ok"
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
