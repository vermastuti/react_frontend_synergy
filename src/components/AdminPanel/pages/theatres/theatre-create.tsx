import { Create, minLength, NumberInput, regex, required, SimpleForm, TextInput } from "react-admin";

const validateName = [required(), minLength(3)];
const validateLocation = [required(), minLength(3)];

const validateContactNumber = [
  required(),
  regex(/^[0-9]{10}$/, 'Contact number must be exactly 10 digits'),
];
const validateStatus = [required()];

export const TheatreCreate = () => (
  <Create title="Add Theatre">
    <SimpleForm>
      <TextInput source="name" label="Theatre Name" validate={validateName} />
      <TextInput source="city" label="Location" validate={validateLocation} />
      {/* <NumberInput source="capacity" label="Seating Capacity" />
      <NumberInput source="screens" label="Number of Screens" />
      <TextInput source="contactNumber" label="Contact Number" />
      <TextInput source="status" label="Status" /> */}
    </SimpleForm>
  </Create>
);
