import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { ExerciseListRelationFilter } from "../exercise/ExerciseListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type LessonWhereInput = {
  content?: StringNullableFilter;
  course?: CourseWhereUniqueInput;
  exercises?: ExerciseListRelationFilter;
  id?: StringFilter;
  order?: IntNullableFilter;
  title?: StringNullableFilter;
};
