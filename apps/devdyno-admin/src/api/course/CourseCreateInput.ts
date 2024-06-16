import { LessonCreateNestedManyWithoutCoursesInput } from "./LessonCreateNestedManyWithoutCoursesInput";

export type CourseCreateInput = {
  category?: string | null;
  description?: string | null;
  difficultyLevel?: string | null;
  lessons?: LessonCreateNestedManyWithoutCoursesInput;
  title?: string | null;
};
