import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { UserRelationFilterObjectSchema } from "./UserRelationFilter.schema";
import { UserWhereInputObjectSchema } from "./UserWhereInput.schema";
import { QuizQuestionCompositeListFilterObjectSchema } from "./QuizQuestionCompositeListFilter.schema";
import { QuizQuestionObjectEqualityInputObjectSchema } from "./QuizQuestionObjectEqualityInput.schema";
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.QuizWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => QuizWhereInputObjectSchema),
        z.lazy(() => QuizWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => QuizWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => QuizWhereInputObjectSchema),
        z.lazy(() => QuizWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    admin: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    adminId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    questions: z
      .union([
        z.lazy(() => QuizQuestionCompositeListFilterObjectSchema),
        z.lazy(() => QuizQuestionObjectEqualityInputObjectSchema).array(),
      ])
      .optional(),
    quizTitle: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict();

export const QuizWhereInputObjectSchema = Schema;
