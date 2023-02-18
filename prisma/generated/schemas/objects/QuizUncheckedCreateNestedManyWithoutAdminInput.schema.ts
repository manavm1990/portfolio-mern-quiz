import { z } from "zod";
import { QuizCreateWithoutAdminInputObjectSchema } from "./QuizCreateWithoutAdminInput.schema";
import { QuizUncheckedCreateWithoutAdminInputObjectSchema } from "./QuizUncheckedCreateWithoutAdminInput.schema";
import { QuizCreateOrConnectWithoutAdminInputObjectSchema } from "./QuizCreateOrConnectWithoutAdminInput.schema";
import { QuizCreateManyAdminInputEnvelopeObjectSchema } from "./QuizCreateManyAdminInputEnvelope.schema";
import { QuizWhereUniqueInputObjectSchema } from "./QuizWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.QuizUncheckedCreateNestedManyWithoutAdminInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => QuizCreateWithoutAdminInputObjectSchema),
          z.lazy(() => QuizCreateWithoutAdminInputObjectSchema).array(),
          z.lazy(() => QuizUncheckedCreateWithoutAdminInputObjectSchema),
          z
            .lazy(() => QuizUncheckedCreateWithoutAdminInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => QuizCreateOrConnectWithoutAdminInputObjectSchema),
          z
            .lazy(() => QuizCreateOrConnectWithoutAdminInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => QuizCreateManyAdminInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => QuizWhereUniqueInputObjectSchema),
          z.lazy(() => QuizWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const QuizUncheckedCreateNestedManyWithoutAdminInputObjectSchema =
  Schema;
