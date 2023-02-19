import express from "express";
import config from "./config.js";
import userRouter from "./user/routes.js";

const app = express();

app.use(express.json());

app.use("/users", userRouter);

app.listen(config.port, () => {
  console.info(`Server: http://localhost:${config.port}`);
});
