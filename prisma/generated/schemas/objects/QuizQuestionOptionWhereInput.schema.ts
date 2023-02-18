import { z } from "zod";
import { BoolFilterObjectSchema } from "./BoolFilter.schema";
import { StringFilterObjectSchema } from "./StringFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.QuizQuestionOptionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => QuizQuestionOptionWhereInputObjectSchema),
        z.lazy(() => QuizQuestionOptionWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => QuizQuestionOptionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => QuizQuestionOptionWhereInputObjectSchema),
        z.lazy(() => QuizQuestionOptionWhereInputObjectSchema).array(),
      ])
      .optional(),
    correct: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    option: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const QuizQuestionOptionWhereInputObjectSchema = Schema;
