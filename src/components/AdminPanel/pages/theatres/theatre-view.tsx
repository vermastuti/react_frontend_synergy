import { DateField, NumberField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const TheatreView = () => (
  <Show title="Show Movie">         
    <SimpleShowLayout>            
      <TextField source="name" label="Theatre Name" />
      <TextField source="location" label="Location" />
      <NumberField source="capacity" label="Seating Capacity" />
      <NumberField source="screens" label="Number of Screens" />
      <TextField source="contactNumber" label="Contact Number" />
      <TextField source="status" label="Status" />
    </SimpleShowLayout>    
</Show>
);
