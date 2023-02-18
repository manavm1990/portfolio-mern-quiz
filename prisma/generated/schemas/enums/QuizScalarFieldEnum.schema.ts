import { z } from "zod";

export const QuizScalarFieldEnumSchema = z.enum(["id", "adminId", "quizTitle"]);
