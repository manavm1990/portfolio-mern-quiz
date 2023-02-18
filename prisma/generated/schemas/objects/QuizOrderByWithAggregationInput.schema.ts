import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { QuizCountOrderByAggregateInputObjectSchema } from "./QuizCountOrderByAggregateInput.schema";
import { QuizMaxOrderByAggregateInputObjectSchema } from "./QuizMaxOrderByAggregateInput.schema";
import { QuizMinOrderByAggregateInputObjectSchema } from "./QuizMinOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.QuizOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    adminId: z.lazy(() => SortOrderSchema).optional(),
    quizTitle: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => QuizCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => QuizMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => QuizMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const QuizOrderByWithAggregationInputObjectSchema = Schema;
