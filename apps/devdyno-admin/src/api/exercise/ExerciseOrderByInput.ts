import { SortOrder } from "../../util/SortOrder";

export type ExerciseOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  difficultyLevel?: SortOrder;
  id?: SortOrder;
  language?: SortOrder;
  lessonId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
