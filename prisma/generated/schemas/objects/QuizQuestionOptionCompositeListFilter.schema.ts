import { z } from "zod";
import { QuizQuestionOptionObjectEqualityInputObjectSchema } from "./QuizQuestionOptionObjectEqualityInput.schema";
import { QuizQuestionOptionWhereInputObjectSchema } from "./QuizQuestionOptionWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.QuizQuestionOptionCompositeListFilter> = z
  .object({
    equals: z
      .lazy(() => QuizQuestionOptionObjectEqualityInputObjectSchema)
      .array()
      .optional(),
    every: z.lazy(() => QuizQuestionOptionWhereInputObjectSchema).optional(),
    some: z.lazy(() => QuizQuestionOptionWhereInputObjectSchema).optional(),
    none: z.lazy(() => QuizQuestionOptionWhereInputObjectSchema).optional(),
    isEmpty: z.boolean().optional(),
    isSet: z.boolean().optional(),
  })
  .strict();

export const QuizQuestionOptionCompositeListFilterObjectSchema = Schema;
