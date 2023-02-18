import { z } from "zod";
import { QuizWhereUniqueInputObjectSchema } from "./objects/QuizWhereUniqueInput.schema";
import { QuizCreateInputObjectSchema } from "./objects/QuizCreateInput.schema";
import { QuizUncheckedCreateInputObjectSchema } from "./objects/QuizUncheckedCreateInput.schema";
import { QuizUpdateInputObjectSchema } from "./objects/QuizUpdateInput.schema";
import { QuizUncheckedUpdateInputObjectSchema } from "./objects/QuizUncheckedUpdateInput.schema";

export const QuizUpsertSchema = z.object({
  where: QuizWhereUniqueInputObjectSchema,
  create: z.union([
    QuizCreateInputObjectSchema,
    QuizUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    QuizUpdateInputObjectSchema,
    QuizUncheckedUpdateInputObjectSchema,
  ]),
});
