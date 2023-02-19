import { Router } from "express";
import validateBody from "../middleware/validate-body.js";
import userController from "./controller.js";
import { ZUser } from "./user.js";

const router = Router();

router.post("/register", validateBody(ZUser), async (req, res) => {
  const jwt = await userController.create(req.body).catch((err) => {
    if (err.code === "P2002")
      return res.status(409).json({ message: "User already exists❗" });

    return res.status(500).json(err);
  });

  res.status(201).json(jwt);
});

export default router;
