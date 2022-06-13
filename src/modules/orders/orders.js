const { Users } = require("../../model/Users");
const { orders } = require("../../model/Orders");

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

      let amount = 0;
      let count = 0;
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

        amount = amount + total_amount;

        count++;

        if (arrLength == count) {
          const isFoundUser = await Users.findOne({
            where: {
              phone,
            },
          });

          if (!isFoundUser) {
            const newUser = await Users.create({
              fullname: customer,
              username: customer,
              phone: phone,
            });

            res.json({
              amount: amount,
              fullname: newOrder.customer,
              user_id: newUser.id,
            });
          } else {
            res.json({
              amount: amount,
              fullname: newOrder.customer,
              user_id: isFoundUser.id,
            });
          }
        }
      });

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
