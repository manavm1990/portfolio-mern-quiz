import bcrypt from "bcrypt";
import client from "../client.js";
import config from "../config.js";
import { type UserType } from "./user.js";
import { generateToken } from "./utils.js";

export default {
  async create(newUser: UserType) {
    const createdUser = await client.user.create({
      data: newUser,
    });

    return generateToken(createdUser);
  },

  async login(user: Pick<UserType, "username" | "password">) {
    const foundUser = await client.user
      .findFirstOrThrow({
        where: {
          username: user.username,
        },
      })
      .catch(() => {
        throw new Error(config.error.invalidLogin);
      });

    const isPasswordCorrect = await bcrypt.compare(
      user.password,
      foundUser.password
    );

    if (!isPasswordCorrect) throw new Error(config.error.invalidLogin);

    return generateToken(foundUser);
  },
};
