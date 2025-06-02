import express from "express";
import rootRouter from "./routers/root.router";

const app = express();

app.use(express.json());

app.use(rootRouter);

app.listen(3069, () => {
  console.log("app listen port: http://localhost:3069");
});
