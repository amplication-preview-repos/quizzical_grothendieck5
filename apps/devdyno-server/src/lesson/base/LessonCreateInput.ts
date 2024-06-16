/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested, IsInt } from "class-validator";
import { CourseWhereUniqueInput } from "../../course/base/CourseWhereUniqueInput";
import { Type } from "class-transformer";
import { ExerciseCreateNestedManyWithoutLessonsInput } from "./ExerciseCreateNestedManyWithoutLessonsInput";

@InputType()
class LessonCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string | null;

  @ApiProperty({
    required: false,
    type: () => CourseWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CourseWhereUniqueInput)
  @IsOptional()
  @Field(() => CourseWhereUniqueInput, {
    nullable: true,
  })
  course?: CourseWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ExerciseCreateNestedManyWithoutLessonsInput,
  })
  @ValidateNested()
  @Type(() => ExerciseCreateNestedManyWithoutLessonsInput)
  @IsOptional()
  @Field(() => ExerciseCreateNestedManyWithoutLessonsInput, {
    nullable: true,
  })
  exercises?: ExerciseCreateNestedManyWithoutLessonsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  order?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;
}

export { LessonCreateInput as LessonCreateInput };
