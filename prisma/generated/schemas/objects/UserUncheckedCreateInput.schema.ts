import { z } from "zod";
import { QuizUncheckedCreateNestedManyWithoutAdminInputObjectSchema } from "./QuizUncheckedCreateNestedManyWithoutAdminInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    mobile: z.string().optional().nullable(),
    password: z.string(),
    username: z.string(),
    quizzes: z
      .lazy(() => QuizUncheckedCreateNestedManyWithoutAdminInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUncheckedCreateInputObjectSchema = Schema;
