import { Exercise } from "../exercise/Exercise";
import { User } from "../user/User";

export type Submission = {
  code: string | null;
  createdAt: Date;
  exercise?: Exercise | null;
  id: string;
  score: number | null;
  status: string | null;
  submittedAt: Date | null;
  updatedAt: Date;
  user?: User | null;
};
