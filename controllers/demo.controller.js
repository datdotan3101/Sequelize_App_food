import demoService from "../services/demo.service";

const demoController = {
  mysql2: async (req, res, next) => {
    const result = await demoService.mysql2();
    res.json(result);
  },
  sequelize: async (req, res, next) => {
    const result = await demoService.sequelize();
    res.json(result);
  },
};

export default demoController;
