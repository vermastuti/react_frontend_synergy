import { Create, NumberInput, SimpleForm, TextInput } from "react-admin";

export const TheatreCreate = () => (
  <Create title="Add Theatre">
    <SimpleForm>
      <TextInput source="name" label="Theatre Name" />
      <TextInput source="location" label="Location" />
      <NumberInput source="capacity" label="Seating Capacity" />
      <NumberInput source="screens" label="Number of Screens" />
      <TextInput source="contactNumber" label="Contact Number" />
      <TextInput source="status" label="Status" />
    </SimpleForm>
  </Create>
);
