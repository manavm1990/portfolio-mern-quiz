import dotenv from "dotenv";
import { type CookieOptions } from "express";
import { type Secret } from "jsonwebtoken";

dotenv.config();

function isSecret(secret: unknown): secret is Secret {
  return typeof secret === "string" || Buffer.isBuffer(secret);
}

let expiresIn = process.env.JWT_EXPIRES_IN;
let maxAge = 1000 * 60 * 60 * 24 * 7; // 7 days
let port = 3000;
let saltRounds = 10;
const sameSite: CookieOptions["sameSite"] = "strict";
const secret = process.env.JWT_SECRET;

if (process.env.COOKIE_MAX_AGE !== null) {
  maxAge = Number(process.env.COOKIE_MAX_AGE);
}

if (process.env.PORT !== null) {
  port = Number(process.env.PORT);
}

if (process.env.saltRounds !== null) {
  saltRounds = Number(process.env.saltRounds);
}

if (expiresIn === null) {
  expiresIn = "1h";
}

if (!isSecret(secret)) {
  throw new Error("JWT_SECRET must be defined");
}

export default {
  cookie: {
    name: process.env.COOKIE_NAME ?? "qid",
    secret: process.env.COOKIE_SECRET,
    options: {
      httpOnly: true,
      maxAge,
      sameSite,
      secure: process.env.NODE_ENV === "production",
    },
  },
  error: {
    invalidLogin: "Invalid username or password.",
  },
  jwt: {
    expiresIn,
    secret,
  },
  port,
  saltRounds,
};
