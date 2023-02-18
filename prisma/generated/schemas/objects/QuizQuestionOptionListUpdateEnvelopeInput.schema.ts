import { z } from "zod";
import { QuizQuestionOptionCreateInputObjectSchema } from "./QuizQuestionOptionCreateInput.schema";
import { QuizQuestionOptionUpdateManyInputObjectSchema } from "./QuizQuestionOptionUpdateManyInput.schema";
import { QuizQuestionOptionDeleteManyInputObjectSchema } from "./QuizQuestionOptionDeleteManyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.QuizQuestionOptionListUpdateEnvelopeInput> = z
  .object({
    set: z
      .union([
        z.lazy(() => QuizQuestionOptionCreateInputObjectSchema),
        z.lazy(() => QuizQuestionOptionCreateInputObjectSchema).array(),
      ])
      .optional(),
    push: z
      .union([
        z.lazy(() => QuizQuestionOptionCreateInputObjectSchema),
        z.lazy(() => QuizQuestionOptionCreateInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .lazy(() => QuizQuestionOptionUpdateManyInputObjectSchema)
      .optional(),
    deleteMany: z
      .lazy(() => QuizQuestionOptionDeleteManyInputObjectSchema)
      .optional(),
  })
  .strict();

export const QuizQuestionOptionListUpdateEnvelopeInputObjectSchema = Schema;
