import sequelize from "../common/sequelize/init.sequelize";
import initModels from "../models/init-models";

const evaluateService = {
  getRate: async (resId) => {
    const models = initModels(sequelize);

    const result = await models.rate_res.findAll({
      where: { res_id: resId },
      attributes: ["user_id", "res_id", "amount", "content"], // lấy 3 cột
    });
    return result;
  },
  getRateByUser: async (userId) => {
    const models = initModels(sequelize);

    const result = await models.rate_res.findAll({
      where: { user_id: userId },
      attributes: ["user_id", "res_id", "amount", "content"],
    });

    return result;
  },
  addRate: async (rateData) => {
    const models = initModels(sequelize);

    const newRate = await models.rate_res.create(rateData);

    return newRate;
  },
};

export default evaluateService;
