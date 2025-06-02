import { where } from "sequelize";
import sequelize from "../common/sequelize/init.sequelize";
import initModels from "../models/init-models";
import like_res from "../models/like_res";

const likeService = {
  findAll: async () => {
    const like = initModels(sequelize);
    const result = await like.like_res.findAll();
    return result;
  },
  likeUser: async (userId) => {
    const models = initModels(sequelize);
    const result = await models.like_res.findAll({
      where: {
        user_id: userId,
      },
    });
    return result;
  },
  likeRes: async (resId) => {
    const models = initModels(sequelize);
    const result = await models.like_res.findAll({
      where: {
        res_id: resId,
      },
    });
    return result;
  },
};

export default likeService;
