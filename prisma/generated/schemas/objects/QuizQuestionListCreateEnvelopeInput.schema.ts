import { z } from "zod";
import { QuizQuestionCreateInputObjectSchema } from "./QuizQuestionCreateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.QuizQuestionListCreateEnvelopeInput> = z
  .object({
    set: z
      .union([
        z.lazy(() => QuizQuestionCreateInputObjectSchema),
        z.lazy(() => QuizQuestionCreateInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const QuizQuestionListCreateEnvelopeInputObjectSchema = Schema;
