import { z } from "zod";
import { QuizUpdateInputObjectSchema } from "./objects/QuizUpdateInput.schema";
import { QuizUncheckedUpdateInputObjectSchema } from "./objects/QuizUncheckedUpdateInput.schema";
import { QuizWhereUniqueInputObjectSchema } from "./objects/QuizWhereUniqueInput.schema";

export const QuizUpdateOneSchema = z.object({
  data: z.union([
    QuizUpdateInputObjectSchema,
    QuizUncheckedUpdateInputObjectSchema,
  ]),
  where: QuizWhereUniqueInputObjectSchema,
});
