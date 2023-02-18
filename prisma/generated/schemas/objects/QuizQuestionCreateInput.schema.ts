import { z } from "zod";
import { QuizQuestionOptionCreateInputObjectSchema } from "./QuizQuestionOptionCreateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.QuizQuestionCreateInput> = z
  .object({
    options: z
      .union([
        z.lazy(() => QuizQuestionOptionCreateInputObjectSchema),
        z.lazy(() => QuizQuestionOptionCreateInputObjectSchema).array(),
      ])
      .optional(),
    question: z.string(),
  })
  .strict();

export const QuizQuestionCreateInputObjectSchema = Schema;
