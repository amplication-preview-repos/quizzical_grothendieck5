/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ExerciseWhereInput } from "./ExerciseWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ExerciseCountArgs {
  @ApiProperty({
    required: false,
    type: () => ExerciseWhereInput,
  })
  @Field(() => ExerciseWhereInput, { nullable: true })
  @Type(() => ExerciseWhereInput)
  where?: ExerciseWhereInput;
}

export { ExerciseCountArgs as ExerciseCountArgs };
