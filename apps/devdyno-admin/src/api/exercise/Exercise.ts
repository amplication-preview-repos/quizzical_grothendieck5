import { Lesson } from "../lesson/Lesson";
import { Submission } from "../submission/Submission";

export type Exercise = {
  createdAt: Date;
  description: string | null;
  difficultyLevel: string | null;
  id: string;
  language: string | null;
  lesson?: Lesson | null;
  submissions?: Array<Submission>;
  title: string | null;
  updatedAt: Date;
};
