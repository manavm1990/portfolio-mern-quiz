import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.QuizCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    adminId: z.lazy(() => SortOrderSchema).optional(),
    quizTitle: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const QuizCountOrderByAggregateInputObjectSchema = Schema;
