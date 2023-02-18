import { z } from "zod";
import { UserUpdateWithoutQuizzesInputObjectSchema } from "./UserUpdateWithoutQuizzesInput.schema";
import { UserUncheckedUpdateWithoutQuizzesInputObjectSchema } from "./UserUncheckedUpdateWithoutQuizzesInput.schema";
import { UserCreateWithoutQuizzesInputObjectSchema } from "./UserCreateWithoutQuizzesInput.schema";
import { UserUncheckedCreateWithoutQuizzesInputObjectSchema } from "./UserUncheckedCreateWithoutQuizzesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpsertWithoutQuizzesInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutQuizzesInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutQuizzesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutQuizzesInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutQuizzesInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutQuizzesInputObjectSchema = Schema;
