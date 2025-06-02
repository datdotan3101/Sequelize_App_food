import express from "express"
import evaluateController from "../controllers/evaluate.controller";

const evaluateRouter = express.Router()

evaluateRouter.get("/get-rate-res/:id", evaluateController.getRate)
evaluateRouter.get("/get-rate-user/:id", evaluateController.getRateByUser);
evaluateRouter.post("/add-rate", evaluateController.addRate)
export default evaluateRouter;