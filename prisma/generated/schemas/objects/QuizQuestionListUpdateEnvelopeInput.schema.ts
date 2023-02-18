import { z } from "zod";
import { QuizQuestionCreateInputObjectSchema } from "./QuizQuestionCreateInput.schema";
import { QuizQuestionUpdateManyInputObjectSchema } from "./QuizQuestionUpdateManyInput.schema";
import { QuizQuestionDeleteManyInputObjectSchema } from "./QuizQuestionDeleteManyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.QuizQuestionListUpdateEnvelopeInput> = z
  .object({
    set: z
      .union([
        z.lazy(() => QuizQuestionCreateInputObjectSchema),
        z.lazy(() => QuizQuestionCreateInputObjectSchema).array(),
      ])
      .optional(),
    push: z
      .union([
        z.lazy(() => QuizQuestionCreateInputObjectSchema),
        z.lazy(() => QuizQuestionCreateInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .lazy(() => QuizQuestionUpdateManyInputObjectSchema)
      .optional(),
    deleteMany: z
      .lazy(() => QuizQuestionDeleteManyInputObjectSchema)
      .optional(),
  })
  .strict();

export const QuizQuestionListUpdateEnvelopeInputObjectSchema = Schema;
