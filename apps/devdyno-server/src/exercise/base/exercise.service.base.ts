/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Exercise as PrismaExercise,
  Submission as PrismaSubmission,
  Lesson as PrismaLesson,
} from "@prisma/client";

export class ExerciseServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ExerciseCountArgs, "select">): Promise<number> {
    return this.prisma.exercise.count(args);
  }

  async exercises<T extends Prisma.ExerciseFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ExerciseFindManyArgs>
  ): Promise<PrismaExercise[]> {
    return this.prisma.exercise.findMany<Prisma.ExerciseFindManyArgs>(args);
  }
  async exercise<T extends Prisma.ExerciseFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ExerciseFindUniqueArgs>
  ): Promise<PrismaExercise | null> {
    return this.prisma.exercise.findUnique(args);
  }
  async createExercise<T extends Prisma.ExerciseCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ExerciseCreateArgs>
  ): Promise<PrismaExercise> {
    return this.prisma.exercise.create<T>(args);
  }
  async updateExercise<T extends Prisma.ExerciseUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ExerciseUpdateArgs>
  ): Promise<PrismaExercise> {
    return this.prisma.exercise.update<T>(args);
  }
  async deleteExercise<T extends Prisma.ExerciseDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ExerciseDeleteArgs>
  ): Promise<PrismaExercise> {
    return this.prisma.exercise.delete(args);
  }

  async findSubmissions(
    parentId: string,
    args: Prisma.SubmissionFindManyArgs
  ): Promise<PrismaSubmission[]> {
    return this.prisma.exercise
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .submissions(args);
  }

  async getLesson(parentId: string): Promise<PrismaLesson | null> {
    return this.prisma.exercise
      .findUnique({
        where: { id: parentId },
      })
      .lesson();
  }
}
