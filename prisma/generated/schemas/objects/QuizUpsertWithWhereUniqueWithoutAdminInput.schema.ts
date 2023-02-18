import { z } from "zod";
import { QuizWhereUniqueInputObjectSchema } from "./QuizWhereUniqueInput.schema";
import { QuizUpdateWithoutAdminInputObjectSchema } from "./QuizUpdateWithoutAdminInput.schema";
import { QuizUncheckedUpdateWithoutAdminInputObjectSchema } from "./QuizUncheckedUpdateWithoutAdminInput.schema";
import { QuizCreateWithoutAdminInputObjectSchema } from "./QuizCreateWithoutAdminInput.schema";
import { QuizUncheckedCreateWithoutAdminInputObjectSchema } from "./QuizUncheckedCreateWithoutAdminInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.QuizUpsertWithWhereUniqueWithoutAdminInput> = z
  .object({
    where: z.lazy(() => QuizWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => QuizUpdateWithoutAdminInputObjectSchema),
      z.lazy(() => QuizUncheckedUpdateWithoutAdminInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => QuizCreateWithoutAdminInputObjectSchema),
      z.lazy(() => QuizUncheckedCreateWithoutAdminInputObjectSchema),
    ]),
  })
  .strict();

export const QuizUpsertWithWhereUniqueWithoutAdminInputObjectSchema = Schema;
