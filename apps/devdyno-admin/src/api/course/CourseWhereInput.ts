import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LessonListRelationFilter } from "../lesson/LessonListRelationFilter";

export type CourseWhereInput = {
  category?: StringNullableFilter;
  description?: StringNullableFilter;
  difficultyLevel?: StringNullableFilter;
  id?: StringFilter;
  lessons?: LessonListRelationFilter;
  title?: StringNullableFilter;
};
