import pool from "../common/mysql2/init.mysql2";
import { models } from "../common/sequelize/init.sequelize";

const demoService = {
  mysql2: async () => {
    const [rows, fields] = await pool.query("SELECT * FROM food");
    return rows;
    // return "hello";
  },
  sequelize: async () => {
    const result = await models.food.findAll()
    return result;
    // return `hello`;
  },
};

export default demoService;
