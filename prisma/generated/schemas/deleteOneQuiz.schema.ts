import { z } from "zod";
import { QuizWhereUniqueInputObjectSchema } from "./objects/QuizWhereUniqueInput.schema";

export const QuizDeleteOneSchema = z.object({
  where: QuizWhereUniqueInputObjectSchema,
});
