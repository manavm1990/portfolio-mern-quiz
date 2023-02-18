import { z } from "zod";
import { QuizOrderByWithRelationInputObjectSchema } from "./objects/QuizOrderByWithRelationInput.schema";
import { QuizWhereInputObjectSchema } from "./objects/QuizWhereInput.schema";
import { QuizWhereUniqueInputObjectSchema } from "./objects/QuizWhereUniqueInput.schema";
import { QuizScalarFieldEnumSchema } from "./enums/QuizScalarFieldEnum.schema";

export const QuizFindManySchema = z.object({
  orderBy: z
    .union([
      QuizOrderByWithRelationInputObjectSchema,
      QuizOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: QuizWhereInputObjectSchema.optional(),
  cursor: QuizWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(QuizScalarFieldEnumSchema).optional(),
});
