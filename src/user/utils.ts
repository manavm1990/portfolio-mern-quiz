import { type User } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config.js";
import { type UserType } from "./user.js";

async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(config.saltRounds);
  return await bcrypt.hash(password, salt);
}

export const generateToken = (user: User): string => {
  const payload = {
    id: user.id,
    username: user.username,
  };

  return jwt.sign(payload, config.jwt.secret, {
    expiresIn: config.jwt.expiresIn,
  });
};

export async function prepareUser(user: UserType): Promise<UserType> {
  const ret = { ...user };

  ret.username = ret.username?.trim().toLowerCase();

  if (ret.password !== "") ret.password = await hashPassword(ret.password);

  return ret;
}
