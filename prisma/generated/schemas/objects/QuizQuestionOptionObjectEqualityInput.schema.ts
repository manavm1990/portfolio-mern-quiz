import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.QuizQuestionOptionObjectEqualityInput> = z
  .object({
    correct: z.boolean(),
    option: z.string(),
  })
  .strict();

export const QuizQuestionOptionObjectEqualityInputObjectSchema = Schema;
