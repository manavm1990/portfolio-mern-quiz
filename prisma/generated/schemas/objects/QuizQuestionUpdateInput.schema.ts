import { z } from "zod";
import { QuizQuestionOptionListUpdateEnvelopeInputObjectSchema } from "./QuizQuestionOptionListUpdateEnvelopeInput.schema";
import { QuizQuestionOptionCreateInputObjectSchema } from "./QuizQuestionOptionCreateInput.schema";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.QuizQuestionUpdateInput> = z
  .object({
    options: z
      .union([
        z.lazy(() => QuizQuestionOptionListUpdateEnvelopeInputObjectSchema),
        z.lazy(() => QuizQuestionOptionCreateInputObjectSchema),
        z.lazy(() => QuizQuestionOptionCreateInputObjectSchema).array(),
      ])
      .optional(),
    question: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const QuizQuestionUpdateInputObjectSchema = Schema;
