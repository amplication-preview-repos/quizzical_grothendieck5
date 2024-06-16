import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { ExerciseTitle } from "../exercise/ExerciseTitle";
import { UserTitle } from "../user/UserTitle";

export const SubmissionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
