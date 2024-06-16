import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ExerciseWhereUniqueInput } from "../exercise/ExerciseWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubmissionWhereInput = {
  code?: StringNullableFilter;
  exercise?: ExerciseWhereUniqueInput;
  id?: StringFilter;
  score?: FloatNullableFilter;
  status?: StringNullableFilter;
  submittedAt?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
