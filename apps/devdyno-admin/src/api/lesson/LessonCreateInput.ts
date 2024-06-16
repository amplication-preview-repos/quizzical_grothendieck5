import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { ExerciseCreateNestedManyWithoutLessonsInput } from "./ExerciseCreateNestedManyWithoutLessonsInput";

export type LessonCreateInput = {
  content?: string | null;
  course?: CourseWhereUniqueInput | null;
  exercises?: ExerciseCreateNestedManyWithoutLessonsInput;
  order?: number | null;
  title?: string | null;
};
