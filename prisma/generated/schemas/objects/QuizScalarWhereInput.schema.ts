import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.QuizScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => QuizScalarWhereInputObjectSchema),
        z.lazy(() => QuizScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => QuizScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => QuizScalarWhereInputObjectSchema),
        z.lazy(() => QuizScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    adminId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    quizTitle: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict();

export const QuizScalarWhereInputObjectSchema = Schema;
