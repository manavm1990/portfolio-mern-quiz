import cookieParser from "cookie-parser";
import { Router } from "express";
import config from "../config.js";
import validateBody from "../middleware/validate-body.js";
import userController from "./controller.js";
import { ZUser, ZUserLogin } from "./user.js";

const router = Router();

router.use(cookieParser(config.cookie.secret));

router.post("/register", validateBody(ZUser), async (req, res) => {
  const jwt = await userController.create(req.body).catch((err) => {
    if (err.code === "P2002")
      res.status(409).json({ message: "User already exists❗" });
    else res.status(500).json(err);
  });

  if (jwt == null) return;

  res.cookie(`${config.cookie.name}_token`, jwt, config.cookie.options);
  res.status(201).json({ message: "User created successfully." });
});

router.post("/login", validateBody(ZUserLogin), async (req, res) => {
  const jwt = await userController.login(req.body).catch((err) => {
    if (err.message === config.error.invalidLogin)
      res.status(401).json({ message: err.message });
    else res.status(500).json(err);
  });

  if (jwt == null) return;

  res.cookie(`${config.cookie.name}_token`, jwt, config.cookie.options);
  res.status(200).json({ message: "User logged in successfully." });
});

export default router;
