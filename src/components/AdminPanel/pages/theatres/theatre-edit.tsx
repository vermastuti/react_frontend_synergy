import { 
  Edit, 
  NumberInput, 
  SelectInput, 
  SimpleForm, 
  TextInput, 
  required,      
  minLength,     
  maxLength,     
  regex,         
  minValue,      
  maxValue       
} from 'react-admin';

const validateName = [required(), minLength(3)];
const validateLocation = [required(), minLength(3)];
// const validateCapacity = [required(), minValue(10), maxValue(1000)];
// const validateScreens = [required(), minValue(1), maxValue(20)];
const validateContactNumber = [
  required(),
  regex(/^[0-9]{10}$/, 'Contact number must be exactly 10 digits'),
];
const validateStatus = [required()];


const mutationOptions = {
    onSuccess: (data) => {
        console.log('Theatre created successfully:', data);},
};

export const TheatreEdit = () => (
  <Edit title="Edit Theatre" mutationOptions={mutationOptions}>
    <SimpleForm>
      <TextInput source="name" label="Theatre Name" validate={validateName} />
      <TextInput source="city" label="Location" validate={validateLocation} />
    </SimpleForm>
  </Edit>
);
