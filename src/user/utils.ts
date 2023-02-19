import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config.js";
import { UserType } from "./user.js";
import { User } from "@prisma/client";

async function hashPassword(password: string) {
  const salt = await bcrypt.genSalt(config.saltRounds);
  return bcrypt.hash(password, salt);
}

export const generateToken = (user: User) => {
  const payload = {
    id: user.id,
    username: user.username,
  };

  return jwt.sign(payload, config.jwt.secret, {
    expiresIn: config.jwt.expiresIn,
  });
};

export async function prepareUser(user: UserType) {
  const ret = { ...user };

  ret.username = ret.username?.trim().toLowerCase();

  if (ret.password) ret.password = await hashPassword(ret.password);

  return ret;
}
