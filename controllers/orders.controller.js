import orderService from "../services/orders.service";

const orderController = {
  order: async (req, res, next) => {
    try {
      const result = await orderService.order(req);
      res.json(result);
    } catch (error) {
      next(error);
    }
  },
};

export default orderController;
