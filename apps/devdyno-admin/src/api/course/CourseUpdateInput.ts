import { LessonUpdateManyWithoutCoursesInput } from "./LessonUpdateManyWithoutCoursesInput";

export type CourseUpdateInput = {
  category?: string | null;
  description?: string | null;
  difficultyLevel?: string | null;
  lessons?: LessonUpdateManyWithoutCoursesInput;
  title?: string | null;
};
