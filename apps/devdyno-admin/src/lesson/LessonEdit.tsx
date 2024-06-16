import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { CourseTitle } from "../course/CourseTitle";
import { ExerciseTitle } from "../exercise/ExerciseTitle";

export const LessonEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <ReferenceInput source="course.id" reference="Course" label="course">
          <SelectInput optionText={CourseTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="exercises"
          reference="Exercise"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ExerciseTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="order" source="order" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
