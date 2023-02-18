import { z } from "zod";
import { QuizCreateWithoutAdminInputObjectSchema } from "./QuizCreateWithoutAdminInput.schema";
import { QuizUncheckedCreateWithoutAdminInputObjectSchema } from "./QuizUncheckedCreateWithoutAdminInput.schema";
import { QuizCreateOrConnectWithoutAdminInputObjectSchema } from "./QuizCreateOrConnectWithoutAdminInput.schema";
import { QuizUpsertWithWhereUniqueWithoutAdminInputObjectSchema } from "./QuizUpsertWithWhereUniqueWithoutAdminInput.schema";
import { QuizCreateManyAdminInputEnvelopeObjectSchema } from "./QuizCreateManyAdminInputEnvelope.schema";
import { QuizWhereUniqueInputObjectSchema } from "./QuizWhereUniqueInput.schema";
import { QuizUpdateWithWhereUniqueWithoutAdminInputObjectSchema } from "./QuizUpdateWithWhereUniqueWithoutAdminInput.schema";
import { QuizUpdateManyWithWhereWithoutAdminInputObjectSchema } from "./QuizUpdateManyWithWhereWithoutAdminInput.schema";
import { QuizScalarWhereInputObjectSchema } from "./QuizScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.QuizUpdateManyWithoutAdminNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => QuizCreateWithoutAdminInputObjectSchema),
        z.lazy(() => QuizCreateWithoutAdminInputObjectSchema).array(),
        z.lazy(() => QuizUncheckedCreateWithoutAdminInputObjectSchema),
        z.lazy(() => QuizUncheckedCreateWithoutAdminInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => QuizCreateOrConnectWithoutAdminInputObjectSchema),
        z.lazy(() => QuizCreateOrConnectWithoutAdminInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => QuizUpsertWithWhereUniqueWithoutAdminInputObjectSchema),
        z
          .lazy(() => QuizUpsertWithWhereUniqueWithoutAdminInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => QuizCreateManyAdminInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => QuizWhereUniqueInputObjectSchema),
        z.lazy(() => QuizWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => QuizWhereUniqueInputObjectSchema),
        z.lazy(() => QuizWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => QuizWhereUniqueInputObjectSchema),
        z.lazy(() => QuizWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => QuizWhereUniqueInputObjectSchema),
        z.lazy(() => QuizWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => QuizUpdateWithWhereUniqueWithoutAdminInputObjectSchema),
        z
          .lazy(() => QuizUpdateWithWhereUniqueWithoutAdminInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => QuizUpdateManyWithWhereWithoutAdminInputObjectSchema),
        z
          .lazy(() => QuizUpdateManyWithWhereWithoutAdminInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => QuizScalarWhereInputObjectSchema),
        z.lazy(() => QuizScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const QuizUpdateManyWithoutAdminNestedInputObjectSchema = Schema;
