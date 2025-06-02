import express from "express";
import demoRouter from "./demo.router";
import likeRouter from "./like.router";
import evaluateRouter from "./evaluate.router";

const rootRouter = express.Router();

rootRouter.use("/demo", demoRouter);
rootRouter.use("/like", likeRouter);
rootRouter.use("/evaluate", evaluateRouter);

export default rootRouter;
