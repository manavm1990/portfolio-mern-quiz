import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { QuizQuestionListUpdateEnvelopeInputObjectSchema } from "./QuizQuestionListUpdateEnvelopeInput.schema";
import { QuizQuestionCreateInputObjectSchema } from "./QuizQuestionCreateInput.schema";
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.QuizUncheckedUpdateManyInput> = z
  .object({
    adminId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
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

export const QuizUncheckedUpdateManyInputObjectSchema = Schema;