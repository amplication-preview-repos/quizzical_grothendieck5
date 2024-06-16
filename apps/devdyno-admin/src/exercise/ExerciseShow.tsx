import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { EXERCISE_TITLE_FIELD } from "./ExerciseTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { LESSON_TITLE_FIELD } from "../lesson/LessonTitle";

export const ExerciseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="difficultyLevel" source="difficultyLevel" />
        <TextField label="ID" source="id" />
        <TextField label="language" source="language" />
        <ReferenceField label="lesson" source="lesson.id" reference="Lesson">
          <TextField source={LESSON_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Submission"
          target="exerciseId"
          label="Submissions"
        >
          <Datagrid rowClick="show">
            <TextField label="code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="exercise"
              source="exercise.id"
              reference="Exercise"
            >
              <TextField source={EXERCISE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="score" source="score" />
            <TextField label="status" source="status" />
            <TextField label="submittedAt" source="submittedAt" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
