import { z } from "zod";
import { User } from "../user/user.js";

const QuizQuestionOption = z.object({
  correct: z.boolean(),
  option: z.string(),
});

const QuizQuestion = z.object({
  question: z.string(),
  options: z.array(QuizQuestionOption),
});

export const Quiz = z.object({
  _id: z.string(),
  admin: User,
  adminId: z.string(),
  quizTitle: z.string(),
});

export type Quiz = z.infer<typeof Quiz>;
