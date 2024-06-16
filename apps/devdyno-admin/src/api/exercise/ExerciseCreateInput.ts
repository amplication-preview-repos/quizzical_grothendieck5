import { LessonWhereUniqueInput } from "../lesson/LessonWhereUniqueInput";
import { SubmissionCreateNestedManyWithoutExercisesInput } from "./SubmissionCreateNestedManyWithoutExercisesInput";

export type ExerciseCreateInput = {
  description?: string | null;
  difficultyLevel?: string | null;
  language?: string | null;
  lesson?: LessonWhereUniqueInput | null;
  submissions?: SubmissionCreateNestedManyWithoutExercisesInput;
  title?: string | null;
};
