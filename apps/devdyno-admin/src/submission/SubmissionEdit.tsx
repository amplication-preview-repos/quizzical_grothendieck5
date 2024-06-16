import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { ExerciseTitle } from "../exercise/ExerciseTitle";
import { UserTitle } from "../user/UserTitle";

export const SubmissionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="code" multiline source="code" />
        <ReferenceInput
          source="exercise.id"
          reference="Exercise"
          label="exercise"
        >
          <SelectInput optionText={ExerciseTitle} />
        </ReferenceInput>
        <NumberInput label="score" source="score" />
        <TextInput label="status" source="status" />
        <DateTimeInput label="submittedAt" source="submittedAt" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
