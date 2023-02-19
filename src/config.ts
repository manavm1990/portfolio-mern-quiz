import dotenv from "dotenv";

dotenv.config();

export default {
  cookie: {
    maxAge: Number(process.env.COOKIE_MAX_AGE) || 1000 * 60 * 60 * 24 * 7, // 7 days
    name: process.env.COOKIE_NAME || "qid",
    secret: process.env.COOKIE_SECRET!,
  },
  error: {
    invalidLogin: "Invalid username or password.",
  },
  jwt: {
    expiresIn: process.env.JWT_EXPIRES_IN || "1h",
    secret: process.env.JWT_SECRET!,
  },
  port: process.env.PORT || 3000,
  saltRounds: Number(process.env.SALT_ROUNDS) || 10,
};
