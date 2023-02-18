import { z } from "zod";
import { QuizQuestionListUpdateEnvelopeInputObjectSchema } from "./QuizQuestionListUpdateEnvelopeInput.schema";
import { QuizQuestionCreateInputObjectSchema } from "./QuizQuestionCreateInput.schema";
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.QuizUpdateManyMutationInput> = z
  .object({
    questions: z
      .union([
        z.lazy(() => QuizQuestionListUpdateEnvelopeInputObjectSchema),
        z.lazy(() => QuizQuestionCreateInputObjectSchema),
        z.lazy(() => QuizQuestionCreateInputObjectSchema).array(),
      ])
      .optional(),
    quizTitle: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const QuizUpdateManyMutationInputObjectSchema = Schema;
