import { z } from "zod";
import { QuizWhereInputObjectSchema } from "./QuizWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.QuizListRelationFilter> = z
  .object({
    every: z.lazy(() => QuizWhereInputObjectSchema).optional(),
    some: z.lazy(() => QuizWhereInputObjectSchema).optional(),
    none: z.lazy(() => QuizWhereInputObjectSchema).optional(),
  })
  .strict();

export const QuizListRelationFilterObjectSchema = Schema;
