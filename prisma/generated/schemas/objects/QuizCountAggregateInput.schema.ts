import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.QuizCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    adminId: z.literal(true).optional(),
    quizTitle: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const QuizCountAggregateInputObjectSchema = Schema;
