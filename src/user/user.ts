import { ObjectId } from "mongodb";
import { z } from "zod";

export const User = z.object({
  _id: z.instanceof(ObjectId),
  email: z.string().email(),
  mobile: z.string().regex(/^\d{10}$/),

  // Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.
  password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/),
  username: z.string().trim().length(3),
});

export type User = z.infer<typeof User>;
