import { z } from "zod";
import { QuizCreateManyAdminInputObjectSchema } from "./QuizCreateManyAdminInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.QuizCreateManyAdminInputEnvelope> = z
  .object({
    data: z.lazy(() => QuizCreateManyAdminInputObjectSchema).array(),
  })
  .strict();

export const QuizCreateManyAdminInputEnvelopeObjectSchema = Schema;
