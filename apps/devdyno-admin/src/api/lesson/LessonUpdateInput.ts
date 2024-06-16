import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { ExerciseUpdateManyWithoutLessonsInput } from "./ExerciseUpdateManyWithoutLessonsInput";

export type LessonUpdateInput = {
  content?: string | null;
  course?: CourseWhereUniqueInput | null;
  exercises?: ExerciseUpdateManyWithoutLessonsInput;
  order?: number | null;
  title?: string | null;
};
