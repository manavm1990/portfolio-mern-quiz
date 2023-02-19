import { Router } from "express";
import { ZUser } from "./user.js";

const router = Router();

router.post("/register", async (req, res) => {
  try {
    ZUser.parse(req.body);
  } catch (e) {
    return res.status(400).json(e);
  }

  return res.send("User created.");
});

export default router;
