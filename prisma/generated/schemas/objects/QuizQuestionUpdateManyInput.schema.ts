import { z } from "zod";
import { QuizQuestionWhereInputObjectSchema } from "./QuizQuestionWhereInput.schema";
import { QuizQuestionUpdateInputObjectSchema } from "./QuizQuestionUpdateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.QuizQuestionUpdateManyInput> = z
  .object({
    where: z.lazy(() => QuizQuestionWhereInputObjectSchema),
    data: z.lazy(() => QuizQuestionUpdateInputObjectSchema),
  })
  .strict();

export const QuizQuestionUpdateManyInputObjectSchema = Schema;
