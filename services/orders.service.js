import { models } from "../common/sequelize/init.sequelize";

const orderService = {
  order: async (req) => {
    const { user_id, food_id, quantity } = req.body;

    const orderFood = await models.orders.create({
      user_id,
      food_id,
      quantity,
    });

    console.log("order", orderFood);

    return orderFood;
  },
};

export default orderService;
