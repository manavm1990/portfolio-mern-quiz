import { z } from "zod";
import { QuizQuestionOptionObjectEqualityInputObjectSchema } from "./QuizQuestionOptionObjectEqualityInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.QuizQuestionObjectEqualityInput> = z
  .object({
    options: z
      .lazy(() => QuizQuestionOptionObjectEqualityInputObjectSchema)
      .array()
      .optional(),
    question: z.string(),
  })
  .strict();

export const QuizQuestionObjectEqualityInputObjectSchema = Schema;
