import { ObjectId } from "mongodb";
import { z } from "zod";
import { User } from "../user/user.js";

const QuizQuestionOption = z.object({
  correct: z.boolean({
    required_error: "Correct must not be empty.",
    invalid_type_error: "Correct must be a boolean (true/false).",
  }),
  option: z.string({
    required_error: "Option must not be empty.",
    invalid_type_error: "Option must be a string.",
  }),
});

const QuizQuestion = z
  .object({
    question: z.string({
      required_error: "Question must not be empty.",
      invalid_type_error: "Question must be a string.",
    }),
    options: z.array(QuizQuestionOption).min(2, {
      message: "Quiz must have at least 2 options.",
    }),
  })
  .refine(
    (data) => {
      return data.options.find((option) => option.correct);
    },
    {
      message: "Quiz must have at least 1 correct option.",
    }
  );

export const Quiz = z.object({
  _id: z.instanceof(ObjectId),
  admin: User,
  adminId: z.instanceof(ObjectId),
  quizTitle: z.string({
    required_error: "Quiz title must not be empty.",
  }),
});

export type Quiz = z.infer<typeof Quiz>;
