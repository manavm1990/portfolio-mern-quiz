import { z } from "zod";
import { QuizCreateNestedManyWithoutAdminInputObjectSchema } from "./QuizCreateNestedManyWithoutAdminInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    mobile: z.string().optional().nullable(),
    password: z.string(),
    username: z.string(),
    quizzes: z
      .lazy(() => QuizCreateNestedManyWithoutAdminInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateInputObjectSchema = Schema;
