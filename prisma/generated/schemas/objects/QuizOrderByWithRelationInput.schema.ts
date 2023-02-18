import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { UserOrderByWithRelationInputObjectSchema } from "./UserOrderByWithRelationInput.schema";
import { QuizQuestionOrderByCompositeAggregateInputObjectSchema } from "./QuizQuestionOrderByCompositeAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.QuizOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    admin: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    adminId: z.lazy(() => SortOrderSchema).optional(),
    questions: z
      .lazy(() => QuizQuestionOrderByCompositeAggregateInputObjectSchema)
      .optional(),
    quizTitle: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const QuizOrderByWithRelationInputObjectSchema = Schema;
