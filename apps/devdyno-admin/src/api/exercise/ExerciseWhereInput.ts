import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LessonWhereUniqueInput } from "../lesson/LessonWhereUniqueInput";
import { SubmissionListRelationFilter } from "../submission/SubmissionListRelationFilter";

export type ExerciseWhereInput = {
  description?: StringNullableFilter;
  difficultyLevel?: StringNullableFilter;
  id?: StringFilter;
  language?: StringNullableFilter;
  lesson?: LessonWhereUniqueInput;
  submissions?: SubmissionListRelationFilter;
  title?: StringNullableFilter;
};
