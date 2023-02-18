import { z } from "zod";
import { QuizQuestionOptionWhereInputObjectSchema } from "./QuizQuestionOptionWhereInput.schema";
import { QuizQuestionOptionUpdateInputObjectSchema } from "./QuizQuestionOptionUpdateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.QuizQuestionOptionUpdateManyInput> = z
  .object({
    where: z.lazy(() => QuizQuestionOptionWhereInputObjectSchema),
    data: z.lazy(() => QuizQuestionOptionUpdateInputObjectSchema),
  })
  .strict();

export const QuizQuestionOptionUpdateManyInputObjectSchema = Schema;
