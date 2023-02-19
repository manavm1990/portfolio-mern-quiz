import { Router } from "express";
import config from "../config.js";
import validateBody from "../middleware/validate-body.js";
import userController from "./controller.js";
import { ZUser, ZUserLogin } from "./user.js";

const router = Router();

router.post("/register", validateBody(ZUser), async (req, res) => {
  const jwt = await userController.create(req.body).catch((err) => {
    if (err.code === "P2002")
      return res.status(409).json({ message: "User already exists❗" });

    return res.status(500).json(err);
  });

  res.status(201).json(jwt);
});

router.post("/login", validateBody(ZUserLogin), async (req, res) => {
  const jwt = await userController.login(req.body).catch((err) => {
    if (err.message === config.error.invalidLogin)
      return res.status(401).json({ message: err.message });

    return res.status(500).json(err);
  });

  res.status(200).json(jwt);
});

export default router;
