import { z } from "zod";

export const UserScalarFieldEnumSchema = z.enum([
  "id",
  "email",
  "mobile",
  "password",
  "username",
]);
