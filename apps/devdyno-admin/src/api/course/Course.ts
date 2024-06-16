import { Lesson } from "../lesson/Lesson";

export type Course = {
  category: string | null;
  createdAt: Date;
  description: string | null;
  difficultyLevel: string | null;
  id: string;
  lessons?: Array<Lesson>;
  title: string | null;
  updatedAt: Date;
};
