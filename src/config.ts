import dotenv from "dotenv";

dotenv.config();

export default {
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
