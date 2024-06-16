import { ExerciseWhereUniqueInput } from "../exercise/ExerciseWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubmissionUpdateInput = {
  code?: string | null;
  exercise?: ExerciseWhereUniqueInput | null;
  score?: number | null;
  status?: string | null;
  submittedAt?: Date | null;
  user?: UserWhereUniqueInput | null;
};
