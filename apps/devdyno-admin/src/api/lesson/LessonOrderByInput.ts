import { SortOrder } from "../../util/SortOrder";

export type LessonOrderByInput = {
  content?: SortOrder;
  courseId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  order?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
