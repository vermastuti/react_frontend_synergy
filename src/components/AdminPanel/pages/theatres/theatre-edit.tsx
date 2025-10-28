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
const validateCapacity = [required(), minValue(10), maxValue(1000)];
const validateScreens = [required(), minValue(1), maxValue(20)];
const validateContactNumber = [
  required(),
  regex(/^[0-9]{10}$/, 'Contact number must be exactly 10 digits'),
];
const validateStatus = [required()];

export const TheatreEdit = () => (
  <Edit title="Edit Theatre">
    <SimpleForm>
      <TextInput source="name" label="Theatre Name" validate={validateName} />
      <TextInput source="location" label="Location" validate={validateLocation} />
      <NumberInput source="capacity" label="Seating Capacity" validate={validateCapacity} />
      <NumberInput source="screens" label="Number of Screens" validate={validateScreens} />
      <TextInput source="contactNumber" label="Contact Number" validate={validateContactNumber} />
      <SelectInput
        source="status"
        label="Status"
        validate={validateStatus} 
        choices={[
          { id: 'OPEN', name: 'Open' },
          { id: 'CLOSED', name: 'Closed' },
          { id: 'UNDER_MAINTENANCE', name: 'Under Maintenance' },
        ]}
      />
    </SimpleForm>
  </Edit>
);
