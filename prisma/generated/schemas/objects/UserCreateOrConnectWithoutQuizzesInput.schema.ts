import { z } from "zod";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserCreateWithoutQuizzesInputObjectSchema } from "./UserCreateWithoutQuizzesInput.schema";
import { UserUncheckedCreateWithoutQuizzesInputObjectSchema } from "./UserUncheckedCreateWithoutQuizzesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutQuizzesInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutQuizzesInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutQuizzesInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutQuizzesInputObjectSchema = Schema;
