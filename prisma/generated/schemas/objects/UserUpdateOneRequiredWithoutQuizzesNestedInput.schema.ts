import { z } from "zod";
import { UserCreateWithoutQuizzesInputObjectSchema } from "./UserCreateWithoutQuizzesInput.schema";
import { UserUncheckedCreateWithoutQuizzesInputObjectSchema } from "./UserUncheckedCreateWithoutQuizzesInput.schema";
import { UserCreateOrConnectWithoutQuizzesInputObjectSchema } from "./UserCreateOrConnectWithoutQuizzesInput.schema";
import { UserUpsertWithoutQuizzesInputObjectSchema } from "./UserUpsertWithoutQuizzesInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserUpdateWithoutQuizzesInputObjectSchema } from "./UserUpdateWithoutQuizzesInput.schema";
import { UserUncheckedUpdateWithoutQuizzesInputObjectSchema } from "./UserUncheckedUpdateWithoutQuizzesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutQuizzesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutQuizzesInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutQuizzesInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutQuizzesInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutQuizzesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutQuizzesInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutQuizzesInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutQuizzesNestedInputObjectSchema =
  Schema;
