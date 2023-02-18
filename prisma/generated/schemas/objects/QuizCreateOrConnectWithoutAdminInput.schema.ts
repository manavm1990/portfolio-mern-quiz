import { z } from "zod";
import { QuizWhereUniqueInputObjectSchema } from "./QuizWhereUniqueInput.schema";
import { QuizCreateWithoutAdminInputObjectSchema } from "./QuizCreateWithoutAdminInput.schema";
import { QuizUncheckedCreateWithoutAdminInputObjectSchema } from "./QuizUncheckedCreateWithoutAdminInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.QuizCreateOrConnectWithoutAdminInput> = z
  .object({
    where: z.lazy(() => QuizWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => QuizCreateWithoutAdminInputObjectSchema),
      z.lazy(() => QuizUncheckedCreateWithoutAdminInputObjectSchema),
    ]),
  })
  .strict();

export const QuizCreateOrConnectWithoutAdminInputObjectSchema = Schema;
