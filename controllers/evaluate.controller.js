import evaluateService from "../services/evaluate.service";

const evaluateController = {
  getRate: async (req, res, next) => {
    try {
      const resId = parseInt(req.params.id); // chuyển về kiểu số nếu cần
      const listRate = await evaluateService.getRate(resId);

      if (listRate.length === 0) {
        return res.status(404).json({ message: "Nhà hàng chưa có đánh giá." });
      }
      res.status(200).json(listRate);
    } catch (error) {
      next(error);
    }
  },
  getRateByUser: async (req, res, next) => {
    try {
      const userId = parseInt(req.params.id);
      const listRate = await evaluateService.getRateByUser(userId);

      if (listRate.length === 0) {
        return res
          .status(404)
          .json({ message: "Người dùng chưa đánh giá nhà hàng nào." });
      }
      res.status(200).json(listRate);
    } catch (error) {
      next(error);
    }
  },
  addRate: async (rateData) => {
    const models = initModels(sequelize);

    const newRate = await models.rate_res.create(rateData);

    return newRate;
  },
  addRate: async (req, res, next) => {
    try {
      const { user_id, res_id, amount, content } = req.body;
      if (!user_id || !res_id || !amount) {
        return res.status(400).json({ message: "Thiếu thông tin bắt buộc." });
      }
      const newRate = await evaluateService.addRate({
        user_id,
        res_id,
        amount,
        content,
      });
      res
        .status(201)
        .json({ message: "Đánh giá đã được thêm thành công.", rate: newRate });
    } catch (error) {
      next(error);
    }
  },
};

export default evaluateController;
