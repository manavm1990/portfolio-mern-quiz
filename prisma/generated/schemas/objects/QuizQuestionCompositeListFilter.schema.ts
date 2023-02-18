import { z } from "zod";
import { QuizQuestionObjectEqualityInputObjectSchema } from "./QuizQuestionObjectEqualityInput.schema";
import { QuizQuestionWhereInputObjectSchema } from "./QuizQuestionWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.QuizQuestionCompositeListFilter> = z
  .object({
    equals: z
      .lazy(() => QuizQuestionObjectEqualityInputObjectSchema)
      .array()
      .optional(),
    every: z.lazy(() => QuizQuestionWhereInputObjectSchema).optional(),
    some: z.lazy(() => QuizQuestionWhereInputObjectSchema).optional(),
    none: z.lazy(() => QuizQuestionWhereInputObjectSchema).optional(),
    isEmpty: z.boolean().optional(),
    isSet: z.boolean().optional(),
  })
  .strict();

export const QuizQuestionCompositeListFilterObjectSchema = Schema;
