import { Create, DateInput, NumberInput, SimpleForm, TextInput } from "react-admin";


export const MovieCreate = () => (
  <Create title="Add Movie">
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="genre" />
      <NumberInput source="rating" />
      <DateInput source="releaseDate" />
      <TextInput source="mlanguage" label="Language"/>
      <TextInput source="duration" />
      <TextInput source="status" />
    </SimpleForm>
  </Create>
);