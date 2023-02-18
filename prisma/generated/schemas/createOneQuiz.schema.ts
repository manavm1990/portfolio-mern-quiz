import { z } from "zod";
import { QuizCreateInputObjectSchema } from "./objects/QuizCreateInput.schema";
import { QuizUncheckedCreateInputObjectSchema } from "./objects/QuizUncheckedCreateInput.schema";

export const QuizCreateOneSchema = z.object({
  data: z.union([
    QuizCreateInputObjectSchema,
    QuizUncheckedCreateInputObjectSchema,
  ]),
});
