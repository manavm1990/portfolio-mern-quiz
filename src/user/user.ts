import { ObjectId } from "mongodb";
import { z } from "zod";

export const User = z.object({
  _id: z.instanceof(ObjectId),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  mobile: z.string().regex(/^\d{10}$/, {
    message: "Please enter a valid 10-digit mobile number.",
  }),
  password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
    message:
      "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.",
  }),
  username: z.string().trim().length(3, {
    message: "Username must be at least 3 characters long.",
  }),
});

export type User = z.infer<typeof User>;
