import { DateField, NumberField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const TheatreView = () => (
  <Show title="Theatre Details">         
    <SimpleShowLayout>            
        <NumberField source="id" label="Theatre ID" />
        <TextField source="name" label="Theatre Name" />
        <TextField source="city" label="City" />
    </SimpleShowLayout>    
</Show>
);
