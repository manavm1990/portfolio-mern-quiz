import { z } from "zod";
import { QuizQuestionOptionWhereInputObjectSchema } from "./QuizQuestionOptionWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.QuizQuestionOptionDeleteManyInput> = z
  .object({
    where: z.lazy(() => QuizQuestionOptionWhereInputObjectSchema),
  })
  .strict();

export const QuizQuestionOptionDeleteManyInputObjectSchema = Schema;
