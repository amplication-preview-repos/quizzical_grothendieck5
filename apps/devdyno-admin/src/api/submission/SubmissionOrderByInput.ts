import { SortOrder } from "../../util/SortOrder";

export type SubmissionOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  exerciseId?: SortOrder;
  id?: SortOrder;
  score?: SortOrder;
  status?: SortOrder;
  submittedAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
