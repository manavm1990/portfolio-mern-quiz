import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.QuizMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    adminId: z.literal(true).optional(),
    quizTitle: z.literal(true).optional(),
  })
  .strict();

export const QuizMinAggregateInputObjectSchema = Schema;
