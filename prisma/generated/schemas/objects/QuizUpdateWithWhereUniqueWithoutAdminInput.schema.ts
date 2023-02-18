import { z } from "zod";
import { QuizWhereUniqueInputObjectSchema } from "./QuizWhereUniqueInput.schema";
import { QuizUpdateWithoutAdminInputObjectSchema } from "./QuizUpdateWithoutAdminInput.schema";
import { QuizUncheckedUpdateWithoutAdminInputObjectSchema } from "./QuizUncheckedUpdateWithoutAdminInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.QuizUpdateWithWhereUniqueWithoutAdminInput> = z
  .object({
    where: z.lazy(() => QuizWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => QuizUpdateWithoutAdminInputObjectSchema),
      z.lazy(() => QuizUncheckedUpdateWithoutAdminInputObjectSchema),
    ]),
  })
  .strict();

export const QuizUpdateWithWhereUniqueWithoutAdminInputObjectSchema = Schema;
