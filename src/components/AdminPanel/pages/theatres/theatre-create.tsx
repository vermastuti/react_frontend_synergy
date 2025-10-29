import { Create, minLength, NumberInput, regex, required, SimpleForm, TextInput } from "react-admin";

const validateName = [required(), minLength(3)];
const validateLocation = [required(), minLength(3)];

const validateContactNumber = [
  required(),
  regex(/^[0-9]{10}$/, 'Contact number must be exactly 10 digits'),
];
const validateStatus = [required()];


const mutationOptions = {
    onSuccess: (data) => {
        console.log('Theatre created successfully:', data);},
};

export const TheatreCreate = () => (
  <Create title="Add Theatre" mutationOptions={mutationOptions}>
    <SimpleForm>
      <TextInput source="name" label="Theatre Name" validate={validateName} />
      <TextInput source="city" label="Location" validate={validateLocation} />
    </SimpleForm>
  </Create>
);
