import { Exercise as TExercise } from "../api/exercise/Exercise";

export const EXERCISE_TITLE_FIELD = "title";

export const ExerciseTitle = (record: TExercise): string => {
  return record.title?.toString() || String(record.id);
};
