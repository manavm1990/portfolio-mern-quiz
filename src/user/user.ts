import { z } from "zod";

export const User = z.object({
  _id: z.string(),
  email: z.string(),
  mobile: z.string(),
  password: z.string(),
  username: z.string(),
});

export type User = z.infer<typeof User>;
