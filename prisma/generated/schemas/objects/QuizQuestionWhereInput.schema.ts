import { z } from "zod";
import { QuizQuestionOptionCompositeListFilterObjectSchema } from "./QuizQuestionOptionCompositeListFilter.schema";
import { QuizQuestionOptionObjectEqualityInputObjectSchema } from "./QuizQuestionOptionObjectEqualityInput.schema";
import { StringFilterObjectSchema } from "./StringFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.QuizQuestionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => QuizQuestionWhereInputObjectSchema),
        z.lazy(() => QuizQuestionWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => QuizQuestionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => QuizQuestionWhereInputObjectSchema),
        z.lazy(() => QuizQuestionWhereInputObjectSchema).array(),
      ])
      .optional(),
    options: z
      .union([
        z.lazy(() => QuizQuestionOptionCompositeListFilterObjectSchema),
        z.lazy(() => QuizQuestionOptionObjectEqualityInputObjectSchema).array(),
      ])
      .optional(),
    question: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const QuizQuestionWhereInputObjectSchema = Schema;
