import { z } from "zod";
import { QuizQuestionWhereInputObjectSchema } from "./QuizQuestionWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.QuizQuestionDeleteManyInput> = z
  .object({
    where: z.lazy(() => QuizQuestionWhereInputObjectSchema),
  })
  .strict();

export const QuizQuestionDeleteManyInputObjectSchema = Schema;
