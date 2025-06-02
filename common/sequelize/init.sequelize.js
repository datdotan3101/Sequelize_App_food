import { Sequelize } from "sequelize";
import initModels from "../../models/init-models";
import { DATABASE_URL } from "../constants/app.constant";

const sequelize = new Sequelize(DATABASE_URL);
export const models = initModels(sequelize);

try {
  await sequelize.authenticate();
  console.log("SEQUELIZE: Connection has been established successfully.");
} catch (error) {
  console.error("SEQUELIZE: Unable to connect to the database:", error);
}

export default sequelize;
