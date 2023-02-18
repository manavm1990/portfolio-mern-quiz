import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateManyInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    mobile: z.string().optional().nullable(),
    password: z.string(),
    username: z.string(),
  })
  .strict();

export const UserCreateManyInputObjectSchema = Schema;
