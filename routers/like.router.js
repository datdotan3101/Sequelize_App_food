import express from "express";
import likeController from "../controllers/like.controller";

const likeRouter = express.Router();

likeRouter.get("/", likeController.findAll);
likeRouter.get("/user/:id", likeController.likeUser);
likeRouter.get("/res/:id", likeController.likeRes);

export default likeRouter;
