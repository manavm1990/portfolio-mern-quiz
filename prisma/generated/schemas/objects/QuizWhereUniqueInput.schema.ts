import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.QuizWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    quizTitle: z.string().optional(),
  })
  .strict();

export const QuizWhereUniqueInputObjectSchema = Schema;
