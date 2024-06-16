import { LessonWhereUniqueInput } from "../lesson/LessonWhereUniqueInput";
import { SubmissionUpdateManyWithoutExercisesInput } from "./SubmissionUpdateManyWithoutExercisesInput";

export type ExerciseUpdateInput = {
  description?: string | null;
  difficultyLevel?: string | null;
  language?: string | null;
  lesson?: LessonWhereUniqueInput | null;
  submissions?: SubmissionUpdateManyWithoutExercisesInput;
  title?: string | null;
};
