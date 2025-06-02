import express from "express"
import demoController from "../controllers/demo.controller"

const demoRouter = express.Router()

demoRouter.get("/mysql2", demoController.mysql2)
demoRouter.get("/sequelize", demoController.sequelize);


export default demoRouter