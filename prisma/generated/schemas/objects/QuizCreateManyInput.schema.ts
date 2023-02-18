import { z } from "zod";
import { QuizQuestionListCreateEnvelopeInputObjectSchema } from "./QuizQuestionListCreateEnvelopeInput.schema";
import { QuizQuestionCreateInputObjectSchema } from "./QuizQuestionCreateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.QuizCreateManyInput> = z
  .object({
    id: z.string().optional(),
    adminId: z.string(),
    questions: z
      .union([
        z.lazy(() => QuizQuestionListCreateEnvelopeInputObjectSchema),
        z.lazy(() => QuizQuestionCreateInputObjectSchema),
        z.lazy(() => QuizQuestionCreateInputObjectSchema).array(),
      ])
      .optional(),
    quizTitle: z.string().optional().nullable(),
  })
  .strict();

export const QuizCreateManyInputObjectSchema = Schema;
