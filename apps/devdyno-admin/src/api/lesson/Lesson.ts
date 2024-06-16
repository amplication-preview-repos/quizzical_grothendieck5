import { Course } from "../course/Course";
import { Exercise } from "../exercise/Exercise";

export type Lesson = {
  content: string | null;
  course?: Course | null;
  createdAt: Date;
  exercises?: Array<Exercise>;
  id: string;
  order: number | null;
  title: string | null;
  updatedAt: Date;
};
